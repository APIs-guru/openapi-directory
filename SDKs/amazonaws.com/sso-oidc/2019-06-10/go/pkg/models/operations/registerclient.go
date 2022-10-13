package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterClientHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterClientRequestBody struct {
	ClientName string   `json:"clientName"`
	ClientType string   `json:"clientType"`
	Scopes     []string `json:"scopes"`
}

type RegisterClientRequest struct {
	Headers RegisterClientHeaders
	Request RegisterClientRequestBody `request:"mediaType=application/json"`
}

type RegisterClientResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidClientMetadataException *interface{}
	InvalidRequestException        *interface{}
	InvalidScopeException          *interface{}
	RegisterClientResponse         *shared.RegisterClientResponse
	StatusCode                     int64
}
