package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContactXAmzTargetEnum string

const (
	DeleteContactXAmzTargetEnumSsmContactsDeleteContact DeleteContactXAmzTargetEnum = "SSMContacts.DeleteContact"
)

type DeleteContactHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteContactRequest struct {
	Headers DeleteContactHeaders
	Request shared.DeleteContactRequest `request:"mediaType=application/json"`
}

type DeleteContactResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteContactResult       map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
