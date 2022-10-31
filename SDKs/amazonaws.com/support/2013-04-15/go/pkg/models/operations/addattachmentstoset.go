package operations

import (
	"openapi/pkg/models/shared"
)

type AddAttachmentsToSetXAmzTargetEnum string

const (
	AddAttachmentsToSetXAmzTargetEnumAwsSupport20130415AddAttachmentsToSet AddAttachmentsToSetXAmzTargetEnum = "AWSSupport_20130415.AddAttachmentsToSet"
)

type AddAttachmentsToSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddAttachmentsToSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddAttachmentsToSetRequest struct {
	Headers AddAttachmentsToSetHeaders
	Request shared.AddAttachmentsToSetRequest `request:"mediaType=application/json"`
}

type AddAttachmentsToSetResponse struct {
	AddAttachmentsToSetResponse    *shared.AddAttachmentsToSetResponse
	AttachmentLimitExceeded        *interface{}
	AttachmentSetExpired           *interface{}
	AttachmentSetIDNotFound        *interface{}
	AttachmentSetSizeLimitExceeded *interface{}
	ContentType                    string
	InternalServerError            *interface{}
	StatusCode                     int64
}
