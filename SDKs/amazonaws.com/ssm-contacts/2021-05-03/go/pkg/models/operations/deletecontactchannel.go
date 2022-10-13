package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContactChannelXAmzTargetEnum string

const (
	DeleteContactChannelXAmzTargetEnumSsmContactsDeleteContactChannel DeleteContactChannelXAmzTargetEnum = "SSMContacts.DeleteContactChannel"
)

type DeleteContactChannelHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContactChannelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteContactChannelRequest struct {
	Headers DeleteContactChannelHeaders
	Request shared.DeleteContactChannelRequest `request:"mediaType=application/json"`
}

type DeleteContactChannelResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteContactChannelResult map[string]interface{}
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
