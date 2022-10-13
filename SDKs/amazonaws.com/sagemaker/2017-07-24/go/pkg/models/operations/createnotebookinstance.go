package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNotebookInstanceXAmzTargetEnum string

const (
	CreateNotebookInstanceXAmzTargetEnumSageMakerCreateNotebookInstance CreateNotebookInstanceXAmzTargetEnum = "SageMaker.CreateNotebookInstance"
)

type CreateNotebookInstanceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNotebookInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateNotebookInstanceRequest struct {
	Headers CreateNotebookInstanceHeaders
	Request shared.CreateNotebookInstanceInput `request:"mediaType=application/json"`
}

type CreateNotebookInstanceResponse struct {
	ContentType                  string
	CreateNotebookInstanceOutput *shared.CreateNotebookInstanceOutput
	ResourceLimitExceeded        *interface{}
	StatusCode                   int64
}
