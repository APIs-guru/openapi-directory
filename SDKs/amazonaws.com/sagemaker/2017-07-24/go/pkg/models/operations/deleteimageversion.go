package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageVersionXAmzTargetEnum string

const (
	DeleteImageVersionXAmzTargetEnumSageMakerDeleteImageVersion DeleteImageVersionXAmzTargetEnum = "SageMaker.DeleteImageVersion"
)

type DeleteImageVersionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteImageVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
