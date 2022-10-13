package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseXAmzTargetEnum string

const (
	GetLicenseXAmzTargetEnumAwsLicenseManagerGetLicense GetLicenseXAmzTargetEnum = "AWSLicenseManager.GetLicense"
)

type GetLicenseHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLicenseRequest struct {
	Headers GetLicenseHeaders
	Request shared.GetLicenseRequest `request:"mediaType=application/json"`
}

type GetLicenseResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	GetLicenseResponse             *shared.GetLicenseResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
