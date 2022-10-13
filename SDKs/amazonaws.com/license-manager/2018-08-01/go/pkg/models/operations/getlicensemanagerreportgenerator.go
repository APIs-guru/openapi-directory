package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseManagerReportGeneratorXAmzTargetEnum string

const (
	GetLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerGetLicenseManagerReportGenerator GetLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.GetLicenseManagerReportGenerator"
)

type GetLicenseManagerReportGeneratorHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLicenseManagerReportGeneratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLicenseManagerReportGeneratorRequest struct {
	Headers GetLicenseManagerReportGeneratorHeaders
	Request shared.GetLicenseManagerReportGeneratorRequest `request:"mediaType=application/json"`
}

type GetLicenseManagerReportGeneratorResponse struct {
	AccessDeniedException                    *interface{}
	AuthorizationException                   *interface{}
	ContentType                              string
	GetLicenseManagerReportGeneratorResponse *shared.GetLicenseManagerReportGeneratorResponse
	InvalidParameterValueException           *interface{}
	RateLimitExceededException               *interface{}
	ResourceLimitExceededException           *interface{}
	ResourceNotFoundException                *interface{}
	ServerInternalException                  *interface{}
	StatusCode                               int64
	ValidationException                      *interface{}
}
