package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum string

const (
	UpdateEndpointWeightsAndCapacitiesXAmzTargetEnumSageMakerUpdateEndpointWeightsAndCapacities UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum = "SageMaker.UpdateEndpointWeightsAndCapacities"
)

type UpdateEndpointWeightsAndCapacitiesHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEndpointWeightsAndCapacitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateEndpointWeightsAndCapacitiesRequest struct {
	Headers UpdateEndpointWeightsAndCapacitiesHeaders
	Request shared.UpdateEndpointWeightsAndCapacitiesInput `request:"mediaType=application/json"`
}

type UpdateEndpointWeightsAndCapacitiesResponse struct {
	ContentType                              string
	ResourceLimitExceeded                    *interface{}
	StatusCode                               int64
	UpdateEndpointWeightsAndCapacitiesOutput *shared.UpdateEndpointWeightsAndCapacitiesOutput
}
