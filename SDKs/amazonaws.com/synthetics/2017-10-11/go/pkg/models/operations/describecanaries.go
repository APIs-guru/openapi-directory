package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCanariesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeCanariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCanariesRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type DescribeCanariesRequest struct {
	QueryParams DescribeCanariesQueryParams
	Headers     DescribeCanariesHeaders
	Request     DescribeCanariesRequestBody `request:"mediaType=application/json"`
}

type DescribeCanariesResponse struct {
	ContentType              string
	DescribeCanariesResponse *shared.DescribeCanariesResponse
	InternalServerException  *interface{}
	StatusCode               int64
	ValidationException      *interface{}
}
