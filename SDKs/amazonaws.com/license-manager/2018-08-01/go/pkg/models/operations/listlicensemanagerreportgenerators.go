package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseManagerReportGeneratorsXAmzTargetEnum string

const (
	ListLicenseManagerReportGeneratorsXAmzTargetEnumAwsLicenseManagerListLicenseManagerReportGenerators ListLicenseManagerReportGeneratorsXAmzTargetEnum = "AWSLicenseManager.ListLicenseManagerReportGenerators"
)

type ListLicenseManagerReportGeneratorsHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicenseManagerReportGeneratorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
