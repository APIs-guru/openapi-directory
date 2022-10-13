package operations

import (
	"openapi/pkg/models/shared"
)

type ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum string

const (
	ListFailuresForLicenseConfigurationOperationsXAmzTargetEnumAwsLicenseManagerListFailuresForLicenseConfigurationOperations ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"
)

type ListFailuresForLicenseConfigurationOperationsHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFailuresForLicenseConfigurationOperationsRequest struct {
	Headers ListFailuresForLicenseConfigurationOperationsHeaders
	Request shared.ListFailuresForLicenseConfigurationOperationsRequest `request:"mediaType=application/json"`
}

type ListFailuresForLicenseConfigurationOperationsResponse struct {
	AccessDeniedException                                 *interface{}
	AuthorizationException                                *interface{}
	ContentType                                           string
	InvalidParameterValueException                        *interface{}
	ListFailuresForLicenseConfigurationOperationsResponse *shared.ListFailuresForLicenseConfigurationOperationsResponse
	RateLimitExceededException                            *interface{}
	ServerInternalException                               *interface{}
	StatusCode                                            int64
}
