package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStreamXAmzTargetEnum string

const (
	DeleteStreamXAmzTargetEnumKinesis20131202DeleteStream DeleteStreamXAmzTargetEnum = "Kinesis_20131202.DeleteStream"
)

type DeleteStreamHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStreamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStreamRequest struct {
	Headers DeleteStreamHeaders
	Request shared.DeleteStreamInput `request:"mediaType=application/json"`
}

type DeleteStreamResponse struct {
	ContentType               string
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
