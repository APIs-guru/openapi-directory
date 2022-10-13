package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationPresignedURLXAmzTargetEnum string

const (
	CreateApplicationPresignedURLXAmzTargetEnumKinesisAnalytics20180523CreateApplicationPresignedURL CreateApplicationPresignedURLXAmzTargetEnum = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"
)

type CreateApplicationPresignedURLHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationPresignedURLXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateApplicationPresignedURLRequest struct {
	Headers CreateApplicationPresignedURLHeaders
	Request shared.CreateApplicationPresignedURLRequest `request:"mediaType=application/json"`
}

type CreateApplicationPresignedURLResponse struct {
	ContentType                           string
	CreateApplicationPresignedURLResponse *shared.CreateApplicationPresignedURLResponse
	InvalidArgumentException              *interface{}
	ResourceInUseException                *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
}
