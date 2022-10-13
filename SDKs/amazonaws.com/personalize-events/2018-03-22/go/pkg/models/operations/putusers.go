package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutUsersRequestBody struct {
	DatasetArn string        `json:"datasetArn"`
	Users      []shared.User `json:"users"`
}

type PutUsersRequest struct {
	Headers PutUsersHeaders
	Request PutUsersRequestBody `request:"mediaType=application/json"`
}

type PutUsersResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
