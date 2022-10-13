package operations

import (
	"openapi/pkg/models/shared"
)

type AddCommunicationToCaseXAmzTargetEnum string

const (
	AddCommunicationToCaseXAmzTargetEnumAwsSupport20130415AddCommunicationToCase AddCommunicationToCaseXAmzTargetEnum = "AWSSupport_20130415.AddCommunicationToCase"
)

type AddCommunicationToCaseHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddCommunicationToCaseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddCommunicationToCaseRequest struct {
	Headers AddCommunicationToCaseHeaders
	Request shared.AddCommunicationToCaseRequest `request:"mediaType=application/json"`
}

type AddCommunicationToCaseResponse struct {
	AddCommunicationToCaseResponse *shared.AddCommunicationToCaseResponse
	AttachmentSetExpired           *interface{}
	AttachmentSetIDNotFound        *interface{}
	CaseIDNotFound                 *interface{}
	ContentType                    string
	InternalServerError            *interface{}
	StatusCode                     int64
}
