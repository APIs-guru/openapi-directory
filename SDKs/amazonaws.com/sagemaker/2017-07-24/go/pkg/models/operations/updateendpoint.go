package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointXAmzTargetEnum string

const (
	UpdateEndpointXAmzTargetEnumSageMakerUpdateEndpoint UpdateEndpointXAmzTargetEnum = "SageMaker.UpdateEndpoint"
)

type UpdateEndpointHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateEndpointRequest struct {
	Headers UpdateEndpointHeaders
	Request shared.UpdateEndpointInput `request:"mediaType=application/json"`
}

type UpdateEndpointResponse struct {
	ContentType           string
	ResourceLimitExceeded *interface{}
	StatusCode            int64
	UpdateEndpointOutput  *shared.UpdateEndpointOutput
}
