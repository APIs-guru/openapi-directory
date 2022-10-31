package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCanariesLastRunQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeCanariesLastRunHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeCanariesLastRunRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
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
