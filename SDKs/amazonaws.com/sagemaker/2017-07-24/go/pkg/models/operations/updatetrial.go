package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTrialXAmzTargetEnum string

const (
	UpdateTrialXAmzTargetEnumSageMakerUpdateTrial UpdateTrialXAmzTargetEnum = "SageMaker.UpdateTrial"
)

type UpdateTrialHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTrialXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTrialRequest struct {
	Headers UpdateTrialHeaders
	Request shared.UpdateTrialRequest `request:"mediaType=application/json"`
}

type UpdateTrialResponse struct {
	ConflictException   *interface{}
	ContentType         string
	ResourceNotFound    *interface{}
	StatusCode          int64
	UpdateTrialResponse *shared.UpdateTrialResponse
}
