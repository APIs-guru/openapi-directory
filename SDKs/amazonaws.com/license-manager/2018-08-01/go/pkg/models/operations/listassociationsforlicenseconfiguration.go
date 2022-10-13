package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociationsForLicenseConfigurationXAmzTargetEnum string

const (
	ListAssociationsForLicenseConfigurationXAmzTargetEnumAwsLicenseManagerListAssociationsForLicenseConfiguration ListAssociationsForLicenseConfigurationXAmzTargetEnum = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
)

type ListAssociationsForLicenseConfigurationHeaders struct {
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociationsForLicenseConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociationsForLicenseConfigurationRequest struct {
	Headers ListAssociationsForLicenseConfigurationHeaders
	Request shared.ListAssociationsForLicenseConfigurationRequest `request:"mediaType=application/json"`
}

type ListAssociationsForLicenseConfigurationResponse struct {
	AccessDeniedException                           *interface{}
	AuthorizationException                          *interface{}
	ContentType                                     string
	FilterLimitExceededException                    *interface{}
	InvalidParameterValueException                  *interface{}
	ListAssociationsForLicenseConfigurationResponse *shared.ListAssociationsForLicenseConfigurationResponse
	RateLimitExceededException                      *interface{}
	ServerInternalException                         *interface{}
	StatusCode                                      int64
}
