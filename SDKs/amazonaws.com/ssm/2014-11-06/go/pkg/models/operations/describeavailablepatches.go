package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAvailablePatchesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAvailablePatchesXAmzTargetEnum string

const (
	DescribeAvailablePatchesXAmzTargetEnumAmazonSsmDescribeAvailablePatches DescribeAvailablePatchesXAmzTargetEnum = "AmazonSSM.DescribeAvailablePatches"
)

type DescribeAvailablePatchesHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAvailablePatchesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAvailablePatchesRequest struct {
	QueryParams DescribeAvailablePatchesQueryParams
	Headers     DescribeAvailablePatchesHeaders
	Request     shared.DescribeAvailablePatchesRequest `request:"mediaType=application/json"`
}

type DescribeAvailablePatchesResponse struct {
	ContentType                    string
	DescribeAvailablePatchesResult *shared.DescribeAvailablePatchesResult
	InternalServerError            *interface{}
	StatusCode                     int64
}
