package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrganizationXAmzTargetEnum string

const (
	CreateOrganizationXAmzTargetEnumWorkMailServiceCreateOrganization CreateOrganizationXAmzTargetEnum = "WorkMailService.CreateOrganization"
)

type CreateOrganizationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateOrganizationRequest struct {
	Headers CreateOrganizationHeaders
	Request shared.CreateOrganizationRequest `request:"mediaType=application/json"`
}

type CreateOrganizationResponse struct {
	ContentType                   string
	CreateOrganizationResponse    *shared.CreateOrganizationResponse
	DirectoryInUseException       *interface{}
	DirectoryUnavailableException *interface{}
	InvalidParameterException     *interface{}
	LimitExceededException        *interface{}
	NameAvailabilityException     *interface{}
	StatusCode                    int64
}
