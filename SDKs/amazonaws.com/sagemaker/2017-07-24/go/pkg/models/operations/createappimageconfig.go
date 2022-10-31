package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppImageConfigXAmzTargetEnum string

const (
	CreateAppImageConfigXAmzTargetEnumSageMakerCreateAppImageConfig CreateAppImageConfigXAmzTargetEnum = "SageMaker.CreateAppImageConfig"
)

type CreateAppImageConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAppImageConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateAppImageConfigRequest struct {
	Headers CreateAppImageConfigHeaders
	Request shared.CreateAppImageConfigRequest `request:"mediaType=application/json"`
}

type CreateAppImageConfigResponse struct {
	ContentType                  string
	CreateAppImageConfigResponse *shared.CreateAppImageConfigResponse
	ResourceInUse                *interface{}
	StatusCode                   int64
}
