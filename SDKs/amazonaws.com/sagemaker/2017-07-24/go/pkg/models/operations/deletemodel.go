package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelXAmzTargetEnum string

const (
	DeleteModelXAmzTargetEnumSageMakerDeleteModel DeleteModelXAmzTargetEnum = "SageMaker.DeleteModel"
)

type DeleteModelHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteModelRequest struct {
	Headers DeleteModelHeaders
	Request shared.DeleteModelInput `request:"mediaType=application/json"`
}

type DeleteModelResponse struct {
	ContentType string
	StatusCode  int64
}
