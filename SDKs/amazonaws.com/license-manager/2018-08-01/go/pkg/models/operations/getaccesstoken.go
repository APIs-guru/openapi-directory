package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessTokenXAmzTargetEnum string

const (
	GetAccessTokenXAmzTargetEnumAwsLicenseManagerGetAccessToken GetAccessTokenXAmzTargetEnum = "AWSLicenseManager.GetAccessToken"
)

type GetAccessTokenHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAccessTokenXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAccessTokenRequest struct {
	Headers GetAccessTokenHeaders
	Request shared.GetAccessTokenRequest `request:"mediaType=application/json"`
}

type GetAccessTokenResponse struct {
	AccessDeniedException      *interface{}
	AuthorizationException     *interface{}
	ContentType                string
	GetAccessTokenResponse     *shared.GetAccessTokenResponse
	RateLimitExceededException *interface{}
	ServerInternalException    *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
