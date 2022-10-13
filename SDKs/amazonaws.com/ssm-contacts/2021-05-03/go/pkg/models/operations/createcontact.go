package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactXAmzTargetEnum string

const (
	CreateContactXAmzTargetEnumSsmContactsCreateContact CreateContactXAmzTargetEnum = "SSMContacts.CreateContact"
)

type CreateContactHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContactXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContactRequest struct {
	Headers CreateContactHeaders
	Request shared.CreateContactRequest `request:"mediaType=application/json"`
}

type CreateContactResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateContactResult           *shared.CreateContactResult
	DataEncryptionException       *interface{}
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
