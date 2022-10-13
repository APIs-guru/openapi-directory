package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicensesXAmzTargetEnum string

const (
	ListLicensesXAmzTargetEnumAwsLicenseManagerListLicenses ListLicensesXAmzTargetEnum = "AWSLicenseManager.ListLicenses"
)

type ListLicensesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicensesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLicensesRequest struct {
	Headers ListLicensesHeaders
	Request shared.ListLicensesRequest `request:"mediaType=application/json"`
}

type ListLicensesResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListLicensesResponse           *shared.ListLicensesResponse
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
