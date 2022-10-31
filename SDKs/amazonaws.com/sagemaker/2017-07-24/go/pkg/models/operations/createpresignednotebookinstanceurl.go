package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresignedNotebookInstanceURLXAmzTargetEnum string

const (
	CreatePresignedNotebookInstanceURLXAmzTargetEnumSageMakerCreatePresignedNotebookInstanceURL CreatePresignedNotebookInstanceURLXAmzTargetEnum = "SageMaker.CreatePresignedNotebookInstanceUrl"
)

type CreatePresignedNotebookInstanceURLHeaders struct {
	XAmzAlgorithm     *string                                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePresignedNotebookInstanceURLXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
