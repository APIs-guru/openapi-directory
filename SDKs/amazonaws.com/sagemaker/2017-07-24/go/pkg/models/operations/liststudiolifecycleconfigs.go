package operations

import (
	"openapi/pkg/models/shared"
)

type ListStudioLifecycleConfigsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStudioLifecycleConfigsXAmzTargetEnum string

const (
	ListStudioLifecycleConfigsXAmzTargetEnumSageMakerListStudioLifecycleConfigs ListStudioLifecycleConfigsXAmzTargetEnum = "SageMaker.ListStudioLifecycleConfigs"
)

type ListStudioLifecycleConfigsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStudioLifecycleConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListStudioLifecycleConfigsRequest struct {
	QueryParams ListStudioLifecycleConfigsQueryParams
	Headers     ListStudioLifecycleConfigsHeaders
	Request     shared.ListStudioLifecycleConfigsRequest `request:"mediaType=application/json"`
}

type ListStudioLifecycleConfigsResponse struct {
	ContentType                        string
	ListStudioLifecycleConfigsResponse *shared.ListStudioLifecycleConfigsResponse
	ResourceInUse                      *interface{}
	StatusCode                         int64
}
