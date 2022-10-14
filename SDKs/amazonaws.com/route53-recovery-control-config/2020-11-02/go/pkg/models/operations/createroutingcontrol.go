package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRoutingControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRoutingControlRequestBody struct {
	ClientToken        *string `json:"ClientToken,omitempty"`
	ClusterArn         string  `json:"ClusterArn"`
	ControlPanelArn    *string `json:"ControlPanelArn,omitempty"`
	RoutingControlName string  `json:"RoutingControlName"`
}

type CreateRoutingControlRequest struct {
	Headers CreateRoutingControlHeaders
	Request CreateRoutingControlRequestBody `request:"mediaType=application/json"`
}

type CreateRoutingControlResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateRoutingControlResponse  *shared.CreateRoutingControlResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
