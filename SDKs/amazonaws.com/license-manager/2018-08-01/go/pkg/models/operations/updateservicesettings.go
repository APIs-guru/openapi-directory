package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceSettingsXAmzTargetEnum string

const (
	UpdateServiceSettingsXAmzTargetEnumAwsLicenseManagerUpdateServiceSettings UpdateServiceSettingsXAmzTargetEnum = "AWSLicenseManager.UpdateServiceSettings"
)

type UpdateServiceSettingsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateServiceSettingsRequest struct {
	Headers UpdateServiceSettingsHeaders
	Request shared.UpdateServiceSettingsRequest `request:"mediaType=application/json"`
}

type UpdateServiceSettingsResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	UpdateServiceSettingsResponse  map[string]interface{}
}
