package operations

import (
	"openapi/pkg/models/shared"
)

type ListEndpointsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEndpointsXAmzTargetEnum string

const (
	ListEndpointsXAmzTargetEnumSageMakerListEndpoints ListEndpointsXAmzTargetEnum = "SageMaker.ListEndpoints"
)

type ListEndpointsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEndpointsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEndpointsRequest struct {
	QueryParams ListEndpointsQueryParams
	Headers     ListEndpointsHeaders
	Request     shared.ListEndpointsInput `request:"mediaType=application/json"`
}

type ListEndpointsResponse struct {
	ContentType         string
	ListEndpointsOutput *shared.ListEndpointsOutput
	StatusCode          int64
}
