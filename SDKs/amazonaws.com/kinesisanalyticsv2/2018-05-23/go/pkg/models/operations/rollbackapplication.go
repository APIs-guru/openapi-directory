package operations

import (
	"openapi/pkg/models/shared"
)

type RollbackApplicationXAmzTargetEnum string

const (
	RollbackApplicationXAmzTargetEnumKinesisAnalytics20180523RollbackApplication RollbackApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.RollbackApplication"
)

type RollbackApplicationHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RollbackApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RollbackApplicationRequest struct {
	Headers RollbackApplicationHeaders
	Request shared.RollbackApplicationRequest `request:"mediaType=application/json"`
}

type RollbackApplicationResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InvalidArgumentException        *interface{}
	InvalidRequestException         *interface{}
	ResourceInUseException          *interface{}
	ResourceNotFoundException       *interface{}
	RollbackApplicationResponse     *shared.RollbackApplicationResponse
	StatusCode                      int64
	UnsupportedOperationException   *interface{}
}
