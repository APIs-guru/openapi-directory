package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCaseXAmzTargetEnum string

const (
	CreateCaseXAmzTargetEnumAwsSupport20130415CreateCase CreateCaseXAmzTargetEnum = "AWSSupport_20130415.CreateCase"
)

type CreateCaseHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCaseRequest struct {
	Headers CreateCaseHeaders
	Request shared.CreateCaseRequest `request:"mediaType=application/json"`
}

type CreateCaseResponse struct {
	AttachmentSetExpired      *interface{}
	AttachmentSetIDNotFound   *interface{}
	CaseCreationLimitExceeded *interface{}
	ContentType               string
	CreateCaseResponse        *shared.CreateCaseResponse
	InternalServerError       *interface{}
	StatusCode                int64
}
