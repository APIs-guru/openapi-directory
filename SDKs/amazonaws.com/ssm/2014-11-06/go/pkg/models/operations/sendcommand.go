package operations

import (
	"openapi/pkg/models/shared"
)

type SendCommandXAmzTargetEnum string

const (
	SendCommandXAmzTargetEnumAmazonSsmSendCommand SendCommandXAmzTargetEnum = "AmazonSSM.SendCommand"
)

type SendCommandHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendCommandXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendCommandRequest struct {
	Headers SendCommandHeaders
	Request shared.SendCommandRequest `request:"mediaType=application/json"`
}

type SendCommandResponse struct {
	ContentType               string
	DuplicateInstanceID       *interface{}
	InternalServerError       *interface{}
	InvalidDocument           *interface{}
	InvalidDocumentVersion    *interface{}
	InvalidInstanceID         *interface{}
	InvalidNotificationConfig *interface{}
	InvalidOutputFolder       *interface{}
	InvalidParameters         *interface{}
	InvalidRole               *interface{}
	MaxDocumentSizeExceeded   *interface{}
	SendCommandResult         *shared.SendCommandResult
	StatusCode                int64
	UnsupportedPlatformType   *interface{}
}
