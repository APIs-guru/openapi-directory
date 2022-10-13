package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseVersionsXAmzTargetEnum string

const (
	ListLicenseVersionsXAmzTargetEnumAwsLicenseManagerListLicenseVersions ListLicenseVersionsXAmzTargetEnum = "AWSLicenseManager.ListLicenseVersions"
)

type ListLicenseVersionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicenseVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLicenseVersionsRequest struct {
	Headers ListLicenseVersionsHeaders
	Request shared.ListLicenseVersionsRequest `request:"mediaType=application/json"`
}

type ListLicenseVersionsResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListLicenseVersionsResponse    *shared.ListLicenseVersionsResponse
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
}
