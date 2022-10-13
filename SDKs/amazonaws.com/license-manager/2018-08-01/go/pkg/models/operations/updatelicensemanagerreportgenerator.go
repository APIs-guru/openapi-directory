package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLicenseManagerReportGeneratorXAmzTargetEnum string

const (
	UpdateLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerUpdateLicenseManagerReportGenerator UpdateLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.UpdateLicenseManagerReportGenerator"
)

type UpdateLicenseManagerReportGeneratorHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLicenseManagerReportGeneratorXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLicenseManagerReportGeneratorRequest struct {
	Headers UpdateLicenseManagerReportGeneratorHeaders
	Request shared.UpdateLicenseManagerReportGeneratorRequest `request:"mediaType=application/json"`
}

type UpdateLicenseManagerReportGeneratorResponse struct {
	AccessDeniedException                       *interface{}
	AuthorizationException                      *interface{}
	ContentType                                 string
	InvalidParameterValueException              *interface{}
	RateLimitExceededException                  *interface{}
	ResourceLimitExceededException              *interface{}
	ResourceNotFoundException                   *interface{}
	ServerInternalException                     *interface{}
	StatusCode                                  int64
	UpdateLicenseManagerReportGeneratorResponse map[string]interface{}
	ValidationException                         *interface{}
}
