package operations

import (
	"openapi/pkg/models/shared"
)

type AddApplicationInputXAmzTargetEnum string

const (
	AddApplicationInputXAmzTargetEnumKinesisAnalytics20180523AddApplicationInput AddApplicationInputXAmzTargetEnum = "KinesisAnalytics_20180523.AddApplicationInput"
)

type AddApplicationInputHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddApplicationInputXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddApplicationInputRequest struct {
	Headers AddApplicationInputHeaders
	Request shared.AddApplicationInputRequest `request:"mediaType=application/json"`
}

type AddApplicationInputResponse struct {
	AddApplicationInputResponse     *shared.AddApplicationInputResponse
	CodeValidationException         *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArgumentException        *interface{}
	InvalidRequestException         *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
