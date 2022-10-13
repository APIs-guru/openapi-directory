package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceSettingsXAmzTargetEnum string

const (
	GetServiceSettingsXAmzTargetEnumAwsLicenseManagerGetServiceSettings GetServiceSettingsXAmzTargetEnum = "AWSLicenseManager.GetServiceSettings"
)

type GetServiceSettingsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetServiceSettingsRequest struct {
	Headers GetServiceSettingsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetServiceSettingsResponse struct {
	AccessDeniedException      *interface{}
	AuthorizationException     *interface{}
	ContentType                string
	GetServiceSettingsResponse *shared.GetServiceSettingsResponse
	RateLimitExceededException *interface{}
	ServerInternalException    *interface{}
	StatusCode                 int64
}
