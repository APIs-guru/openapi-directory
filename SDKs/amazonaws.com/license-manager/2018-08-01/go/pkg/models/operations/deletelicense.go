package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicenseXAmzTargetEnum string

const (
	DeleteLicenseXAmzTargetEnumAwsLicenseManagerDeleteLicense DeleteLicenseXAmzTargetEnum = "AWSLicenseManager.DeleteLicense"
)

type DeleteLicenseHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLicenseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteLicenseRequest struct {
	Headers DeleteLicenseHeaders
	Request shared.DeleteLicenseRequest `request:"mediaType=application/json"`
}

type DeleteLicenseResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ConflictException              *interface{}
	ContentType                    string
	DeleteLicenseResponse          *shared.DeleteLicenseResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	RedirectException              *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
