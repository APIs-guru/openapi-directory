package operations

import (
	"openapi/pkg/models/shared"
)

type ListAppsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAppsXAmzTargetEnum string

const (
	ListAppsXAmzTargetEnumSageMakerListApps ListAppsXAmzTargetEnum = "SageMaker.ListApps"
)

type ListAppsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAppsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAppsRequest struct {
	QueryParams ListAppsQueryParams
	Headers     ListAppsHeaders
	Request     shared.ListAppsRequest `request:"mediaType=application/json"`
}

type ListAppsResponse struct {
	ContentType      string
	ListAppsResponse *shared.ListAppsResponse
	StatusCode       int64
}
