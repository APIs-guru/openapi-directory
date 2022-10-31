package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateContactChannelXAmzTargetEnum string

const (
	ActivateContactChannelXAmzTargetEnumSsmContactsActivateContactChannel ActivateContactChannelXAmzTargetEnum = "SSMContacts.ActivateContactChannel"
)

type ActivateContactChannelHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ActivateContactChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
