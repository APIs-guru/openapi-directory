package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageVersionXAmzTargetEnum string

const (
	DeleteImageVersionXAmzTargetEnumSageMakerDeleteImageVersion DeleteImageVersionXAmzTargetEnum = "SageMaker.DeleteImageVersion"
)

type DeleteImageVersionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImageVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteImageVersionRequest struct {
	Headers DeleteImageVersionHeaders
	Request shared.DeleteImageVersionRequest `request:"mediaType=application/json"`
}

type DeleteImageVersionResponse struct {
	ContentType                string
	DeleteImageVersionResponse map[string]interface{}
	ResourceInUse              *interface{}
	ResourceNotFound           *interface{}
	StatusCode                 int64
}
