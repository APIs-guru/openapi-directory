package operations

import (
	"openapi/pkg/models/shared"
)

type StopNotebookInstanceXAmzTargetEnum string

const (
	StopNotebookInstanceXAmzTargetEnumSageMakerStopNotebookInstance StopNotebookInstanceXAmzTargetEnum = "SageMaker.StopNotebookInstance"
)

type StopNotebookInstanceHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopNotebookInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopNotebookInstanceRequest struct {
	Headers StopNotebookInstanceHeaders
	Request shared.StopNotebookInstanceInput `request:"mediaType=application/json"`
}

type StopNotebookInstanceResponse struct {
	ContentType string
	StatusCode  int64
}
