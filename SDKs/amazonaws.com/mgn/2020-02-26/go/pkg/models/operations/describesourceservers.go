package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSourceServersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeSourceServersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeSourceServersRequestBodyFilters struct {
	IsArchived      *bool    `json:"isArchived,omitempty"`
	SourceServerIDs []string `json:"sourceServerIDs,omitempty"`
}

type DescribeSourceServersRequestBody struct {
	Filters    DescribeSourceServersRequestBodyFilters `json:"filters"`
	MaxResults *int64                                  `json:"maxResults,omitempty"`
	NextToken  *string                                 `json:"nextToken,omitempty"`
}

type DescribeSourceServersRequest struct {
	QueryParams DescribeSourceServersQueryParams
	Headers     DescribeSourceServersHeaders
	Request     DescribeSourceServersRequestBody `request:"mediaType=application/json"`
}

type DescribeSourceServersResponse struct {
	ContentType                   string
	DescribeSourceServersResponse *shared.DescribeSourceServersResponse
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
