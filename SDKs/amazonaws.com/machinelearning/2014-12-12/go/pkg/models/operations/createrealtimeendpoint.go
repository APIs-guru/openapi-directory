package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRealtimeEndpointXAmzTargetEnum string

const (
	CreateRealtimeEndpointXAmzTargetEnumAmazonMl20141212CreateRealtimeEndpoint CreateRealtimeEndpointXAmzTargetEnum = "AmazonML_20141212.CreateRealtimeEndpoint"
)

type CreateRealtimeEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRealtimeEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRealtimeEndpointRequest struct {
	Headers CreateRealtimeEndpointHeaders
	Request shared.CreateRealtimeEndpointInput `request:"mediaType=application/json"`
}

type CreateRealtimeEndpointResponse struct {
	ContentType                  string
	CreateRealtimeEndpointOutput *shared.CreateRealtimeEndpointOutput
	InternalServerException      *interface{}
	InvalidInputException        *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
