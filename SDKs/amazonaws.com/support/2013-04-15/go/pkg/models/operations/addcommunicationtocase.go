package operations

import (
	"openapi/pkg/models/shared"
)

type AddCommunicationToCaseXAmzTargetEnum string

const (
	AddCommunicationToCaseXAmzTargetEnumAwsSupport20130415AddCommunicationToCase AddCommunicationToCaseXAmzTargetEnum = "AWSSupport_20130415.AddCommunicationToCase"
)

type AddCommunicationToCaseHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddCommunicationToCaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
