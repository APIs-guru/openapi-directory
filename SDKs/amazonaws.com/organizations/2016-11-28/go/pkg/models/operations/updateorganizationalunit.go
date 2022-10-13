package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOrganizationalUnitXAmzTargetEnum string

const (
	UpdateOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128UpdateOrganizationalUnit UpdateOrganizationalUnitXAmzTargetEnum = "AWSOrganizationsV20161128.UpdateOrganizationalUnit"
)

type UpdateOrganizationalUnitHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateOrganizationalUnitXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateOrganizationalUnitRequest struct {
	Headers UpdateOrganizationalUnitHeaders
	Request shared.UpdateOrganizationalUnitRequest `request:"mediaType=application/json"`
}

type UpdateOrganizationalUnitResponse struct {
	AwsOrganizationsNotInUseException    *interface{}
	AccessDeniedException                *interface{}
	ConcurrentModificationException      *interface{}
	ContentType                          string
	DuplicateOrganizationalUnitException *interface{}
	InvalidInputException                *interface{}
	OrganizationalUnitNotFoundException  *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
	UpdateOrganizationalUnitResponse     *shared.UpdateOrganizationalUnitResponse
}
