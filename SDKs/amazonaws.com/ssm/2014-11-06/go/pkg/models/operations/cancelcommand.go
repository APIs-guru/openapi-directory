package operations

import (
	"openapi/pkg/models/shared"
)

type CancelCommandXAmzTargetEnum string

const (
	CancelCommandXAmzTargetEnumAmazonSsmCancelCommand CancelCommandXAmzTargetEnum = "AmazonSSM.CancelCommand"
)

type CancelCommandHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CancelCommandXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CancelCommandRequest struct {
	Headers CancelCommandHeaders
	Request shared.CancelCommandRequest `request:"mediaType=application/json"`
}

type CancelCommandResponse struct {
	CancelCommandResult map[string]interface{}
	ContentType         string
	DuplicateInstanceID *interface{}
	InternalServerError *interface{}
	InvalidCommandID    *interface{}
	InvalidInstanceID   *interface{}
	StatusCode          int64
}
