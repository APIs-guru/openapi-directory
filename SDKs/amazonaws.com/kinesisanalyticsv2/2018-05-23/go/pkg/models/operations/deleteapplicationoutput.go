package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationOutputXAmzTargetEnum string

const (
	DeleteApplicationOutputXAmzTargetEnumKinesisAnalytics20180523DeleteApplicationOutput DeleteApplicationOutputXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplicationOutput"
)

type DeleteApplicationOutputHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationOutputXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationOutputRequest struct {
	Headers DeleteApplicationOutputHeaders
	Request shared.DeleteApplicationOutputRequest `request:"mediaType=application/json"`
}

type DeleteApplicationOutputResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteApplicationOutputResponse *shared.DeleteApplicationOutputResponse
	InvalidArgumentException        *interface{}
	InvalidRequestException         *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
