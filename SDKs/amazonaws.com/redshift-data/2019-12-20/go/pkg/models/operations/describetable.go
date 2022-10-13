package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeTableXAmzTargetEnum string

const (
	DescribeTableXAmzTargetEnumRedshiftDataDescribeTable DescribeTableXAmzTargetEnum = "RedshiftData.DescribeTable"
)

type DescribeTableHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTableRequest struct {
	QueryParams DescribeTableQueryParams
	Headers     DescribeTableHeaders
	Request     shared.DescribeTableRequest `request:"mediaType=application/json"`
}

type DescribeTableResponse struct {
	ContentType             string
	DescribeTableResponse   *shared.DescribeTableResponse
	InternalServerException *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
