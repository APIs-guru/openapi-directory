package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLicenseManagerReportGeneratorXAmzTargetEnum string

const (
	UpdateLicenseManagerReportGeneratorXAmzTargetEnumAwsLicenseManagerUpdateLicenseManagerReportGenerator UpdateLicenseManagerReportGeneratorXAmzTargetEnum = "AWSLicenseManager.UpdateLicenseManagerReportGenerator"
)

type UpdateLicenseManagerReportGeneratorHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLicenseManagerReportGeneratorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
