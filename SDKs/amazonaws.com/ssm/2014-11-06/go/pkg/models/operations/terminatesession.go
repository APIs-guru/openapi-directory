package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateSessionXAmzTargetEnum string

const (
	TerminateSessionXAmzTargetEnumAmazonSsmTerminateSession TerminateSessionXAmzTargetEnum = "AmazonSSM.TerminateSession"
)

type TerminateSessionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type TerminateSessionRequest struct {
	Headers TerminateSessionHeaders
	Request shared.TerminateSessionRequest `request:"mediaType=application/json"`
}

type TerminateSessionResponse struct {
	ContentType              string
	DoesNotExistException    *interface{}
	InternalServerError      *interface{}
	StatusCode               int64
	TerminateSessionResponse *shared.TerminateSessionResponse
}
