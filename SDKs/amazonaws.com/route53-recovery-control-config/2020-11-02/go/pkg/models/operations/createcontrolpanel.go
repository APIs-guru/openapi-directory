package operations

import (
	"openapi/pkg/models/shared"
)

type CreateControlPanelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateControlPanelRequestBody struct {
	ClientToken      *string `json:"ClientToken,omitempty"`
	ClusterArn       string  `json:"ClusterArn"`
	ControlPanelName string  `json:"ControlPanelName"`
}

type CreateControlPanelRequest struct {
	Headers CreateControlPanelHeaders
	Request CreateControlPanelRequestBody `request:"mediaType=application/json"`
}

type CreateControlPanelResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateControlPanelResponse    *shared.CreateControlPanelResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
