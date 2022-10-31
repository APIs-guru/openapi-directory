package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum string

const (
	DeleteNotebookInstanceLifecycleConfigXAmzTargetEnumSageMakerDeleteNotebookInstanceLifecycleConfig DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum = "SageMaker.DeleteNotebookInstanceLifecycleConfig"
)

type DeleteNotebookInstanceLifecycleConfigHeaders struct {
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteNotebookInstanceLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteNotebookInstanceLifecycleConfigRequest struct {
	Headers DeleteNotebookInstanceLifecycleConfigHeaders
	Request shared.DeleteNotebookInstanceLifecycleConfigInput `request:"mediaType=application/json"`
}

type DeleteNotebookInstanceLifecycleConfigResponse struct {
	ContentType string
	StatusCode  int64
}
