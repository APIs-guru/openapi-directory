package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEndpointXAmzTargetEnum string

const (
	DeleteEndpointXAmzTargetEnumSageMakerDeleteEndpoint DeleteEndpointXAmzTargetEnum = "SageMaker.DeleteEndpoint"
)

type DeleteEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEndpointRequest struct {
	Headers DeleteEndpointHeaders
	Request shared.DeleteEndpointInput `request:"mediaType=application/json"`
}

type DeleteEndpointResponse struct {
	ContentType string
	StatusCode  int64
}
