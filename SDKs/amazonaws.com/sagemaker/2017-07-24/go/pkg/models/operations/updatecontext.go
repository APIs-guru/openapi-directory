package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContextXAmzTargetEnum string

const (
	UpdateContextXAmzTargetEnumSageMakerUpdateContext UpdateContextXAmzTargetEnum = "SageMaker.UpdateContext"
)

type UpdateContextHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateContextRequest struct {
	Headers UpdateContextHeaders
	Request shared.UpdateContextRequest `request:"mediaType=application/json"`
}

type UpdateContextResponse struct {
	ConflictException     *interface{}
	ContentType           string
	ResourceNotFound      *interface{}
	StatusCode            int64
	UpdateContextResponse *shared.UpdateContextResponse
}
