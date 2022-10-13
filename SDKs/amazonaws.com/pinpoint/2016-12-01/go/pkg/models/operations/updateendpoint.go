package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	EndpointID    string `pathParam:"style=simple,explode=false,name=endpoint-id"`
}

type UpdateEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEndpointRequestBodyEndpointRequest struct {
	Address        *string                     `json:"Address"`
	Attributes     map[string][]string         `json:"Attributes"`
	ChannelType    *shared.ChannelTypeEnum     `json:"ChannelType"`
	Demographic    *shared.EndpointDemographic `json:"Demographic"`
	EffectiveDate  *string                     `json:"EffectiveDate"`
	EndpointStatus *string                     `json:"EndpointStatus"`
	Location       *shared.EndpointLocation    `json:"Location"`
	Metrics        map[string]float64          `json:"Metrics"`
	OptOut         *string                     `json:"OptOut"`
	RequestID      *string                     `json:"RequestId"`
	User           *shared.EndpointUser        `json:"User"`
}

type UpdateEndpointRequestBody struct {
	EndpointRequest UpdateEndpointRequestBodyEndpointRequest `json:"EndpointRequest"`
}

type UpdateEndpointRequest struct {
	PathParams UpdateEndpointPathParams
	Headers    UpdateEndpointHeaders
	Request    UpdateEndpointRequestBody `request:"mediaType=application/json"`
}

type UpdateEndpointResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateEndpointResponse       *shared.UpdateEndpointResponse
}
