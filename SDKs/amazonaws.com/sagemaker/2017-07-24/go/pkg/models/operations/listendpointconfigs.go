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
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEndpointConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
