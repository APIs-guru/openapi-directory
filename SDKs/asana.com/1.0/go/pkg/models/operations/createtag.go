package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTagQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateTagRequestBody struct {
	Data *shared.TagRequest `json:"data"`
}

type CreateTagRequest struct {
	QueryParams CreateTagQueryParams
	Request     CreateTagRequestBody `request:"mediaType=application/json"`
}

type CreateTag201ApplicationJSON struct {
	Data *shared.TagResponse `json:"data"`
}

type CreateTagResponse struct {
	ContentType                       string
	ErrorResponse                     *shared.ErrorResponse
	StatusCode                        int64
	CreateTag201ApplicationJSONObject *CreateTag201ApplicationJSON
}
