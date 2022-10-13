package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
	CreateNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerCreateNotebookInstanceLifecycleConfig CreateNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.CreateNotebookInstanceLifecycleConfig"
)

type CreateNotebookInstanceLifecycleConfigHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateNotebookInstanceLifecycleConfigRequest struct {
	Headers CreateNotebookInstanceLifecycleConfigHeaders
	Request shared.CreateNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
}

type CreateNotebookInstanceLifecycleConfigResponse struct {
	ContentType                                 string
	CreateNotebookInstanceLifecycleConfigOutput *shared.CreateNotebookInstanceLifecycleConfigOutput
	ResourceLimitExceeded                       *interface{}
	StatusCode                                  int64
}
