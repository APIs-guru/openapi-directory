package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrganizationXAmzTargetEnum string

const (
	CreateOrganizationXAmzTargetEnumAwsOrganizationsV20161128CreateOrganization CreateOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.CreateOrganization"
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
	AccessDeniedException              *interface{}
	AccessDeniedForDependencyException *interface{}
	AlreadyInOrganizationException     *interface{}
	ConcurrentModificationException    *interface{}
	ConstraintViolationException       *interface{}
	ContentType                        string
	CreateOrganizationResponse         *shared.CreateOrganizationResponse
	InvalidInputException              *interface{}
	ServiceException                   *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
