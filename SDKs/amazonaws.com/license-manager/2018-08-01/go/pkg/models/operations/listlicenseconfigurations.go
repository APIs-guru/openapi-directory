package operations

import (
	"openapi/pkg/models/shared"
)

type ListLicenseConfigurationsXAmzTargetEnum string

const (
	ListLicenseConfigurationsXAmzTargetEnumAwsLicenseManagerListLicenseConfigurations ListLicenseConfigurationsXAmzTargetEnum = "AWSLicenseManager.ListLicenseConfigurations"
)

type ListLicenseConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLicenseConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListLicenseConfigurationsRequest struct {
	Headers ListLicenseConfigurationsHeaders
	Request shared.ListLicenseConfigurationsRequest `request:"mediaType=application/json"`
}

type ListLicenseConfigurationsResponse struct {
	AccessDeniedException             *interface{}
	AuthorizationException            *interface{}
	ContentType                       string
	FilterLimitExceededException      *interface{}
	InvalidParameterValueException    *interface{}
	ListLicenseConfigurationsResponse *shared.ListLicenseConfigurationsResponse
	RateLimitExceededException        *interface{}
	ServerInternalException           *interface{}
	StatusCode                        int64
}
