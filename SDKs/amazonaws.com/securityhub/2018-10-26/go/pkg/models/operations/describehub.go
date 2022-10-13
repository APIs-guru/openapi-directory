package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHubQueryParams struct {
	HubArn *string `queryParam:"style=form,explode=true,name=HubArn"`
}

type DescribeHubHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeHubRequest struct {
	QueryParams DescribeHubQueryParams
	Headers     DescribeHubHeaders
}

type DescribeHubResponse struct {
	ContentType               string
	DescribeHubResponse       *shared.DescribeHubResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
