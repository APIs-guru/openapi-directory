package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRealtimeEndpointXAmzTargetEnum string

const (
	DeleteRealtimeEndpointXAmzTargetEnumAmazonMl20141212DeleteRealtimeEndpoint DeleteRealtimeEndpointXAmzTargetEnum = "AmazonML_20141212.DeleteRealtimeEndpoint"
)

type DeleteRealtimeEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRealtimeEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRealtimeEndpointRequest struct {
	Headers DeleteRealtimeEndpointHeaders
	Request shared.DeleteRealtimeEndpointInput `request:"mediaType=application/json"`
}

type DeleteRealtimeEndpointResponse struct {
	ContentType                  string
	DeleteRealtimeEndpointOutput *shared.DeleteRealtimeEndpointOutput
	InternalServerException      *interface{}
	InvalidInputException        *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
