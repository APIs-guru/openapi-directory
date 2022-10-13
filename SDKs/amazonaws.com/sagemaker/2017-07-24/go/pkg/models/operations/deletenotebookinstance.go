package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNotebookInstanceXAmzTargetEnum string

const (
	DeleteNotebookInstanceXAmzTargetEnumSageMakerDeleteNotebookInstance DeleteNotebookInstanceXAmzTargetEnum = "SageMaker.DeleteNotebookInstance"
)

type DeleteNotebookInstanceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteNotebookInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteNotebookInstanceRequest struct {
	Headers DeleteNotebookInstanceHeaders
	Request shared.DeleteNotebookInstanceInput `request:"mediaType=application/json"`
}

type DeleteNotebookInstanceResponse struct {
	ContentType string
	StatusCode  int64
}
