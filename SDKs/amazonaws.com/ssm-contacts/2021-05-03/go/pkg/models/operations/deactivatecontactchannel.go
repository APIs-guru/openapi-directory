package operations

import (
	"openapi/pkg/models/shared"
)

type DeactivateContactChannelXAmzTargetEnum string

const (
	DeactivateContactChannelXAmzTargetEnumSsmContactsDeactivateContactChannel DeactivateContactChannelXAmzTargetEnum = "SSMContacts.DeactivateContactChannel"
)

type DeactivateContactChannelHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeactivateContactChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeactivateContactChannelRequest struct {
	Headers DeactivateContactChannelHeaders
	Request shared.DeactivateContactChannelRequest `request:"mediaType=application/json"`
}

type DeactivateContactChannelResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	DeactivateContactChannelResult map[string]interface{}
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
