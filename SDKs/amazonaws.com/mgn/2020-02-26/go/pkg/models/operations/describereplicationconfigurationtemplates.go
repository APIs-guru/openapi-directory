package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplicationConfigurationTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeReplicationConfigurationTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeReplicationConfigurationTemplatesRequestBody struct {
	MaxResults                          *int64   `json:"maxResults,omitempty"`
	NextToken                           *string  `json:"nextToken,omitempty"`
	ReplicationConfigurationTemplateIDs []string `json:"replicationConfigurationTemplateIDs"`
}

type DescribeReplicationConfigurationTemplatesRequest struct {
	QueryParams DescribeReplicationConfigurationTemplatesQueryParams
	Headers     DescribeReplicationConfigurationTemplatesHeaders
	Request     DescribeReplicationConfigurationTemplatesRequestBody `request:"mediaType=application/json"`
}

type DescribeReplicationConfigurationTemplatesResponse struct {
	ContentType                                       string
	DescribeReplicationConfigurationTemplatesResponse *shared.DescribeReplicationConfigurationTemplatesResponse
	ResourceNotFoundException                         *interface{}
	StatusCode                                        int64
	UninitializedAccountException                     *interface{}
	ValidationException                               *interface{}
}
