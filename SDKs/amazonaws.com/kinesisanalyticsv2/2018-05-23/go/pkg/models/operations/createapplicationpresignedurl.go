package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationPresignedURLXAmzTargetEnum string

const (
	CreateApplicationPresignedURLXAmzTargetEnumKinesisAnalytics20180523CreateApplicationPresignedURL CreateApplicationPresignedURLXAmzTargetEnum = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"
)

type CreateApplicationPresignedURLHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateApplicationPresignedURLXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
