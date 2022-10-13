package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateContactChannelXAmzTargetEnum string

const (
	ActivateContactChannelXAmzTargetEnumSsmContactsActivateContactChannel ActivateContactChannelXAmzTargetEnum = "SSMContacts.ActivateContactChannel"
)

type ActivateContactChannelHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ActivateContactChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ActivateContactChannelRequest struct {
	Headers ActivateContactChannelHeaders
	Request shared.ActivateContactChannelRequest `request:"mediaType=application/json"`
}

type ActivateContactChannelResponse struct {
	AccessDeniedException        *interface{}
	ActivateContactChannelResult map[string]interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
