package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresignedNotebookInstanceURLXAmzTargetEnum string

const (
	CreatePresignedNotebookInstanceURLXAmzTargetEnumSageMakerCreatePresignedNotebookInstanceURL CreatePresignedNotebookInstanceURLXAmzTargetEnum = "SageMaker.CreatePresignedNotebookInstanceUrl"
)

type CreatePresignedNotebookInstanceURLHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePresignedNotebookInstanceURLXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePresignedNotebookInstanceURLRequest struct {
	Headers CreatePresignedNotebookInstanceURLHeaders
	Request shared.CreatePresignedNotebookInstanceURLInput `request:"mediaType=application/json"`
}

type CreatePresignedNotebookInstanceURLResponse struct {
	ContentType                              string
	CreatePresignedNotebookInstanceURLOutput *shared.CreatePresignedNotebookInstanceURLOutput
	StatusCode                               int64
}
