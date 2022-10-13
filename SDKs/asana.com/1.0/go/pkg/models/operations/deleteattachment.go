package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttachmentPathParams struct {
	AttachmentGid string `pathParam:"style=simple,explode=false,name=attachment_gid"`
}

type DeleteAttachmentQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteAttachmentRequest struct {
	PathParams  DeleteAttachmentPathParams
	QueryParams DeleteAttachmentQueryParams
}

type DeleteAttachment200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type DeleteAttachmentResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	DeleteAttachment200ApplicationJSONObject *DeleteAttachment200ApplicationJSON
}
