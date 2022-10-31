package operations

import (
	"openapi/pkg/models/shared"
)

type StartSessionXAmzTargetEnum string

const (
	StartSessionXAmzTargetEnumAmazonSsmStartSession StartSessionXAmzTargetEnum = "AmazonSSM.StartSession"
)

type StartSessionHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartSessionRequest struct {
	Headers StartSessionHeaders
	Request shared.StartSessionRequest `request:"mediaType=application/json"`
}

type StartSessionResponse struct {
	ContentType          string
	InternalServerError  *interface{}
	InvalidDocument      *interface{}
	StartSessionResponse *shared.StartSessionResponse
	StatusCode           int64
	TargetNotConnected   *interface{}
}
