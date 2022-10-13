package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseManagerReportGeneratorsXAmzTargetEnum string

const (
	ListLicenseManagerReportGeneratorsXAmzTargetEnumAwsLicenseManagerListLicenseManagerReportGenerators ListLicenseManagerReportGeneratorsXAmzTargetEnum = "AWSLicenseManager.ListLicenseManagerReportGenerators"
)

type ListLicenseManagerReportGeneratorsHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicenseManagerReportGeneratorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLicenseManagerReportGeneratorsRequest struct {
	Headers ListLicenseManagerReportGeneratorsHeaders
	Request shared.ListLicenseManagerReportGeneratorsRequest `request:"mediaType=application/json"`
}

type ListLicenseManagerReportGeneratorsResponse struct {
	AccessDeniedException                      *interface{}
	AuthorizationException                     *interface{}
	ContentType                                string
	InvalidParameterValueException             *interface{}
	ListLicenseManagerReportGeneratorsResponse *shared.ListLicenseManagerReportGeneratorsResponse
	RateLimitExceededException                 *interface{}
	ResourceLimitExceededException             *interface{}
	ResourceNotFoundException                  *interface{}
	ServerInternalException                    *interface{}
	StatusCode                                 int64
	ValidationException                        *interface{}
}
