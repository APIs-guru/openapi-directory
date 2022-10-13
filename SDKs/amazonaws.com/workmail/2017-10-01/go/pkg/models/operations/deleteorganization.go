package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOrganizationXAmzTargetEnum string

const (
	DeleteOrganizationXAmzTargetEnumWorkMailServiceDeleteOrganization DeleteOrganizationXAmzTargetEnum = "WorkMailService.DeleteOrganization"
)

type DeleteOrganizationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteOrganizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteOrganizationRequest struct {
	Headers DeleteOrganizationHeaders
	Request shared.DeleteOrganizationRequest `request:"mediaType=application/json"`
}

type DeleteOrganizationResponse struct {
	ContentType                   string
	DeleteOrganizationResponse    *shared.DeleteOrganizationResponse
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
