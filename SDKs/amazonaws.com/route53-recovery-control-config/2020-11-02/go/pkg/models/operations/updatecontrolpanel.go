package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateControlPanelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateControlPanelRequestBody struct {
	ControlPanelArn  string `json:"ControlPanelArn"`
	ControlPanelName string `json:"ControlPanelName"`
}

type UpdateControlPanelRequest struct {
	Headers UpdateControlPanelHeaders
	Request UpdateControlPanelRequestBody `request:"mediaType=application/json"`
}

type UpdateControlPanelResponse struct {
	AccessDeniedException      *interface{}
	ConflictException          *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateControlPanelResponse *shared.UpdateControlPanelResponse
	ValidationException        *interface{}
}
