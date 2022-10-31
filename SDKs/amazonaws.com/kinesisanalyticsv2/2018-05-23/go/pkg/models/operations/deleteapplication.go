package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationXAmzTargetEnum string

const (
	DeleteApplicationXAmzTargetEnumKinesisAnalytics20180523DeleteApplication DeleteApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.DeleteApplication"
)

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteApplicationRequest struct {
	Headers DeleteApplicationHeaders
	Request shared.DeleteApplicationRequest `request:"mediaType=application/json"`
}

type DeleteApplicationResponse struct {
	ConcurrentModificationException          *interface{}
	ContentType                              string
	DeleteApplicationResponse                map[string]interface{}
	InvalidApplicationConfigurationException *interface{}
	InvalidArgumentException                 *interface{}
	InvalidRequestException                  *interface{}
	ResourceInUseException                   *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
