package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateTagRequestBodyInput struct {
	Data *shared.TagRequestInput `json:"data,omitempty"`
}

type CreateTag201ApplicationJSON struct {
	Data *shared.TagResponse `json:"data,omitempty"`
}

type CreateTagRequest struct {
	QueryParams CreateTagQueryParams
	Request     CreateTagRequestBodyInput `request:"mediaType=application/json"`
}

type CreateTagResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	StatusCode                        int64
	CreateTag201ApplicationJSONObject *CreateTag201ApplicationJSON
}
