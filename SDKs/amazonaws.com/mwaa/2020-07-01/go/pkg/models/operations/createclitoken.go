package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCliTokenPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type CreateCliTokenHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateCliTokenRequest struct {
	PathParams CreateCliTokenPathParams
	Headers    CreateCliTokenHeaders
}

type CreateCliTokenResponse struct {
	ContentType               string
	CreateCliTokenResponse    *shared.CreateCliTokenResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
