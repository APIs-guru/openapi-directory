package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseSpecificationsForResourceXAmzTargetEnum string

const (
	ListLicenseSpecificationsForResourceXAmzTargetEnumAwsLicenseManagerListLicenseSpecificationsForResource ListLicenseSpecificationsForResourceXAmzTargetEnum = "AWSLicenseManager.ListLicenseSpecificationsForResource"
)

type ListLicenseSpecificationsForResourceHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicenseSpecificationsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLicenseSpecificationsForResourceRequest struct {
	Headers ListLicenseSpecificationsForResourceHeaders
	Request shared.ListLicenseSpecificationsForResourceRequest `request:"mediaType=application/json"`
}

type ListLicenseSpecificationsForResourceResponse struct {
	AccessDeniedException                        *interface{}
	AuthorizationException                       *interface{}
	ContentType                                  string
	InvalidParameterValueException               *interface{}
	ListLicenseSpecificationsForResourceResponse *shared.ListLicenseSpecificationsForResourceResponse
	RateLimitExceededException                   *interface{}
	ServerInternalException                      *interface{}
	StatusCode                                   int64
}
