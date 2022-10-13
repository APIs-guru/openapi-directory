package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLicenseSpecificationsForResourceXAmzTargetEnum string

const (
	UpdateLicenseSpecificationsForResourceXAmzTargetEnumAwsLicenseManagerUpdateLicenseSpecificationsForResource UpdateLicenseSpecificationsForResourceXAmzTargetEnum = "AWSLicenseManager.UpdateLicenseSpecificationsForResource"
)

type UpdateLicenseSpecificationsForResourceHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLicenseSpecificationsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLicenseSpecificationsForResourceRequest struct {
	Headers UpdateLicenseSpecificationsForResourceHeaders
	Request shared.UpdateLicenseSpecificationsForResourceRequest `request:"mediaType=application/json"`
}

type UpdateLicenseSpecificationsForResourceResponse struct {
	AccessDeniedException                          *interface{}
	AuthorizationException                         *interface{}
	ContentType                                    string
	InvalidParameterValueException                 *interface{}
	InvalidResourceStateException                  *interface{}
	LicenseUsageException                          *interface{}
	RateLimitExceededException                     *interface{}
	ServerInternalException                        *interface{}
	StatusCode                                     int64
	UpdateLicenseSpecificationsForResourceResponse map[string]interface{}
}
