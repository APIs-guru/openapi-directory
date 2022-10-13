package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOrganizationalUnitXAmzTargetEnum string

const (
	DeleteOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128DeleteOrganizationalUnit DeleteOrganizationalUnitXAmzTargetEnum = "AWSOrganizationsV20161128.DeleteOrganizationalUnit"
)

type DeleteOrganizationalUnitHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteOrganizationalUnitXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteOrganizationalUnitRequest struct {
	Headers DeleteOrganizationalUnitHeaders
	Request shared.DeleteOrganizationalUnitRequest `request:"mediaType=application/json"`
}

type DeleteOrganizationalUnitResponse struct {
	AwsOrganizationsNotInUseException   *interface{}
	AccessDeniedException               *interface{}
	ConcurrentModificationException     *interface{}
	ContentType                         string
	InvalidInputException               *interface{}
	OrganizationalUnitNotEmptyException *interface{}
	OrganizationalUnitNotFoundException *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
