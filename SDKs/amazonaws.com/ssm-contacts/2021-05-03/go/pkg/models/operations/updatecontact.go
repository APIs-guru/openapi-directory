package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContactXAmzTargetEnum string

const (
	UpdateContactXAmzTargetEnumSsmContactsUpdateContact UpdateContactXAmzTargetEnum = "SSMContacts.UpdateContact"
)

type UpdateContactHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateContactRequest struct {
	Headers UpdateContactHeaders
	Request shared.UpdateContactRequest `request:"mediaType=application/json"`
}

type UpdateContactResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DataEncryptionException       *interface{}
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateContactResult           map[string]interface{}
	ValidationException           *interface{}
}
