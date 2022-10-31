package operations

import (
	"openapi/pkg/models/shared"
)

type GetLicenseManagerReportGeneratorXAmzTargetEnum string

const (
	GetLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerGetLicenseManagerReportGenerator GetLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.GetLicenseManagerReportGenerator"
)

type GetLicenseManagerReportGeneratorHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLicenseManagerReportGeneratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
