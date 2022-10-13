package operations

import (
	"openapi/pkg/models/shared"
)

type ListEndpointConfigsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEndpointConfigsXAmzTargetEnum string

const (
	ListEndpointConfigsXAmzTargetEnumSageMakerListEndpointConfigs ListEndpointConfigsXAmzTargetEnum = "SageMaker.ListEndpointConfigs"
)

type ListEndpointConfigsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEndpointConfigsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEndpointConfigsRequest struct {
	QueryParams ListEndpointConfigsQueryParams
	Headers     ListEndpointConfigsHeaders
	Request     shared.ListEndpointConfigsInput `request:"mediaType=application/json"`
}

type ListEndpointConfigsResponse struct {
	ContentType               string
	ListEndpointConfigsOutput *shared.ListEndpointConfigsOutput
	StatusCode                int64
}
