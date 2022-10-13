package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebLoginTokenPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type CreateWebLoginTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWebLoginTokenRequest struct {
	PathParams CreateWebLoginTokenPathParams
	Headers    CreateWebLoginTokenHeaders
}

type CreateWebLoginTokenResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	CreateWebLoginTokenResponse *shared.CreateWebLoginTokenResponse
	InternalServerException     *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
