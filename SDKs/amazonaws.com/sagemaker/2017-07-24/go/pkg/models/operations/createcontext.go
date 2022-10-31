package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContextXAmzTargetEnum string

const (
	CreateContextXAmzTargetEnumSageMakerCreateContext CreateContextXAmzTargetEnum = "SageMaker.CreateContext"
)

type CreateContextHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateContextRequest struct {
	Headers CreateContextHeaders
	Request shared.CreateContextRequest `request:"mediaType=application/json"`
}

type CreateContextResponse struct {
	ContentType           string
	CreateContextResponse *shared.CreateContextResponse
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
