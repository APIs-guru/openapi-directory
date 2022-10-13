package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotebookInstanceLifecycleConfigsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListNotebookInstanceLifecycleConfigsXAmzTargetEnum string

const (
	ListNotebookInstanceLifecycleConfigsXAmzTargetEnumSageMakerListNotebookInstanceLifecycleConfigs ListNotebookInstanceLifecycleConfigsXAmzTargetEnum = "SageMaker.ListNotebookInstanceLifecycleConfigs"
)

type ListNotebookInstanceLifecycleConfigsHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListNotebookInstanceLifecycleConfigsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListNotebookInstanceLifecycleConfigsRequest struct {
	QueryParams ListNotebookInstanceLifecycleConfigsQueryParams
	Headers     ListNotebookInstanceLifecycleConfigsHeaders
	Request     shared.ListNotebookInstanceLifecycleConfigsInput `request:"mediaType=application/json"`
}

type ListNotebookInstanceLifecycleConfigsResponse struct {
	ContentType                                string
	ListNotebookInstanceLifecycleConfigsOutput *shared.ListNotebookInstanceLifecycleConfigsOutput
	StatusCode                                 int64
}
