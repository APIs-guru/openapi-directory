package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttachmentPathParams struct {
	AttachmentGid string `pathParam:"style=simple,explode=false,name=attachment_gid"`
}

type GetAttachmentQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetAttachment200ApplicationJSON struct {
	Data *shared.AttachmentResponse `json:"data,omitempty"`
}

type GetAttachmentRequest struct {
	PathParams  GetAttachmentPathParams
	QueryParams GetAttachmentQueryParams
}

type GetAttachmentResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	GetAttachment200ApplicationJSONObject *GetAttachment200ApplicationJSON
}
