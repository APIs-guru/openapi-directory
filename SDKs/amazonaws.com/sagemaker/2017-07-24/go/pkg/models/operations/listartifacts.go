package operations

import (
	"openapi/pkg/models/shared"
)

type ListArtifactsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListArtifactsXAmzTargetEnum string

const (
	ListArtifactsXAmzTargetEnumSageMakerListArtifacts ListArtifactsXAmzTargetEnum = "SageMaker.ListArtifacts"
)

type ListArtifactsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListArtifactsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListArtifactsRequest struct {
	QueryParams ListArtifactsQueryParams
	Headers     ListArtifactsHeaders
	Request     shared.ListArtifactsRequest `request:"mediaType=application/json"`
}

type ListArtifactsResponse struct {
	ContentType           string
	ListArtifactsResponse *shared.ListArtifactsResponse
	ResourceNotFound      *interface{}
	StatusCode            int64
}
