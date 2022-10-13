package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseUsageXAmzTargetEnum string

const (
	GetLicenseUsageXAmzTargetEnumAwsLicenseManagerGetLicenseUsage GetLicenseUsageXAmzTargetEnum = "AWSLicenseManager.GetLicenseUsage"
)

type GetLicenseUsageHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLicenseUsageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLicenseUsageRequest struct {
	Headers GetLicenseUsageHeaders
	Request shared.GetLicenseUsageRequest `request:"mediaType=application/json"`
}

type GetLicenseUsageResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	GetLicenseUsageResponse        *shared.GetLicenseUsageResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
