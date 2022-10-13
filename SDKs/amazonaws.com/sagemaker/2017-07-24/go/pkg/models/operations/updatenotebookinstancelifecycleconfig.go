package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
	UpdateNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerUpdateNotebookInstanceLifecycleConfig UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.UpdateNotebookInstanceLifecycleConfig"
)

type UpdateNotebookInstanceLifecycleConfigHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateNotebookInstanceLifecycleConfigRequest struct {
	Headers UpdateNotebookInstanceLifecycleConfigHeaders
	Request shared.UpdateNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
}

type UpdateNotebookInstanceLifecycleConfigResponse struct {
	ContentType                                 string
	ResourceLimitExceeded                       *interface{}
	StatusCode                                  int64
	UpdateNotebookInstanceLifecycleConfigOutput map[string]interface{}
}
