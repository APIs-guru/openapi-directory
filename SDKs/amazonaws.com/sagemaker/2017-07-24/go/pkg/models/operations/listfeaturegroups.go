package operations

import (
	"openapi/pkg/models/shared"
)

type ListFeatureGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFeatureGroupsXAmzTargetEnum string

const (
	ListFeatureGroupsXAmzTargetEnumSageMakerListFeatureGroups ListFeatureGroupsXAmzTargetEnum = "SageMaker.ListFeatureGroups"
)

type ListFeatureGroupsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFeatureGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFeatureGroupsRequest struct {
	QueryParams ListFeatureGroupsQueryParams
	Headers     ListFeatureGroupsHeaders
	Request     shared.ListFeatureGroupsRequest `request:"mediaType=application/json"`
}

type ListFeatureGroupsResponse struct {
	ContentType               string
	ListFeatureGroupsResponse *shared.ListFeatureGroupsResponse
	StatusCode                int64
}
