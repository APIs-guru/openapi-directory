package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEndpointPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	EndpointID    string `pathParam:"style=simple,explode=false,name=endpoint-id"`
}

type UpdateEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateEndpointRequestBodyEndpointRequest struct {
	Address        *string                     `json:"Address,omitempty"`
	Attributes     map[string][]string         `json:"Attributes,omitempty"`
	ChannelType    *shared.ChannelTypeEnum     `json:"ChannelType,omitempty"`
	Demographic    *shared.EndpointDemographic `json:"Demographic,omitempty"`
	EffectiveDate  *string                     `json:"EffectiveDate,omitempty"`
	EndpointStatus *string                     `json:"EndpointStatus,omitempty"`
	Location       *shared.EndpointLocation    `json:"Location,omitempty"`
	Metrics        map[string]float64          `json:"Metrics,omitempty"`
	OptOut         *string                     `json:"OptOut,omitempty"`
	RequestID      *string                     `json:"RequestId,omitempty"`
	User           *shared.EndpointUser        `json:"User,omitempty"`
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
