package operations

import (
	"openapi/pkg/models/shared"
)

type StartNotebookInstanceXAmzTargetEnum string

const (
	StartNotebookInstanceXAmzTargetEnumSageMakerStartNotebookInstance StartNotebookInstanceXAmzTargetEnum = "SageMaker.StartNotebookInstance"
)

type StartNotebookInstanceHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartNotebookInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartNotebookInstanceRequest struct {
	Headers StartNotebookInstanceHeaders
	Request shared.StartNotebookInstanceInput `request:"mediaType=application/json"`
}

type StartNotebookInstanceResponse struct {
	ContentType           string
	ResourceLimitExceeded *interface{}
	StatusCode            int64
}
