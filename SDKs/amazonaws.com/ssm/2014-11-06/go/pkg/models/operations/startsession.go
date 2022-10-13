package operations

import (
	"openapi/pkg/models/shared"
)

type StartSessionXAmzTargetEnum string

const (
	StartSessionXAmzTargetEnumAmazonSsmStartSession StartSessionXAmzTargetEnum = "AmazonSSM.StartSession"
)

type StartSessionHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
