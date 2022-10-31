package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActionXAmzTargetEnum string

const (
	UpdateActionXAmzTargetEnumSageMakerUpdateAction UpdateActionXAmzTargetEnum = "SageMaker.UpdateAction"
)

type UpdateActionHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateActionRequest struct {
	Headers UpdateActionHeaders
	Request shared.UpdateActionRequest `request:"mediaType=application/json"`
}

type UpdateActionResponse struct {
	ConflictException    *interface{}
	ContentType          string
	ResourceNotFound     *interface{}
	StatusCode           int64
	UpdateActionResponse *shared.UpdateActionResponse
}
