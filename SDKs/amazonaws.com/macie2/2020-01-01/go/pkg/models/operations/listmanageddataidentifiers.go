package operations

import (
	"openapi/pkg/models/shared"
)

type ListManagedDataIdentifiersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListManagedDataIdentifiersRequestBody struct {
	NextToken *string `json:"nextToken"`
}

type ListManagedDataIdentifiersRequest struct {
	Headers ListManagedDataIdentifiersHeaders
	Request ListManagedDataIdentifiersRequestBody `request:"mediaType=application/json"`
}

type ListManagedDataIdentifiersResponse struct {
	ContentType                        string
	ListManagedDataIdentifiersResponse *shared.ListManagedDataIdentifiersResponse
	StatusCode                         int64
}
