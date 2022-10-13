package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicenseManagerReportGeneratorXAmzTargetEnum string

const (
	DeleteLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerDeleteLicenseManagerReportGenerator DeleteLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.DeleteLicenseManagerReportGenerator"
)

type DeleteLicenseManagerReportGeneratorHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLicenseManagerReportGeneratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLicenseManagerReportGeneratorRequest struct {
	Headers DeleteLicenseManagerReportGeneratorHeaders
	Request shared.DeleteLicenseManagerReportGeneratorRequest `request:"mediaType=application/json"`
}

type DeleteLicenseManagerReportGeneratorResponse struct {
	AccessDeniedException                       *interface{}
	AuthorizationException                      *interface{}
	ContentType                                 string
	DeleteLicenseManagerReportGeneratorResponse map[string]interface{}
	InvalidParameterValueException              *interface{}
	RateLimitExceededException                  *interface{}
	ResourceLimitExceededException              *interface{}
	ResourceNotFoundException                   *interface{}
	ServerInternalException                     *interface{}
	StatusCode                                  int64
	ValidationException                         *interface{}
}
