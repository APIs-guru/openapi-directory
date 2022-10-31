package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRealtimeEndpointXAmzTargetEnum string

const (
	CreateRealtimeEndpointXAmzTargetEnumAmazonMl20141212CreateRealtimeEndpoint CreateRealtimeEndpointXAmzTargetEnum = "AmazonML_20141212.CreateRealtimeEndpoint"
)

type CreateRealtimeEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRealtimeEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
