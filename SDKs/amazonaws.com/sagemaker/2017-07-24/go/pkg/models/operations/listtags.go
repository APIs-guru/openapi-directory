package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsXAmzTargetEnum string

const (
	ListTagsXAmzTargetEnumSageMakerListTags ListTagsXAmzTargetEnum = "SageMaker.ListTags"
)

type ListTagsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsRequest struct {
	QueryParams ListTagsQueryParams
	Headers     ListTagsHeaders
	Request     shared.ListTagsInput `request:"mediaType=application/json"`
}

type ListTagsResponse struct {
	ContentType    string
	ListTagsOutput *shared.ListTagsOutput
	StatusCode     int64
}
