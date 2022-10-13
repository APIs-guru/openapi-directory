package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCanariesLastRunQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeCanariesLastRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCanariesLastRunRequestBody struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type DescribeCanariesLastRunRequest struct {
	QueryParams DescribeCanariesLastRunQueryParams
	Headers     DescribeCanariesLastRunHeaders
	Request     DescribeCanariesLastRunRequestBody `request:"mediaType=application/json"`
}

type DescribeCanariesLastRunResponse struct {
	ContentType                     string
	DescribeCanariesLastRunResponse *shared.DescribeCanariesLastRunResponse
	InternalServerException         *interface{}
	StatusCode                      int64
	ValidationException             *interface{}
}
