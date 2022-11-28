package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBatchRequestQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateBatchRequestRequestBody struct {
	Data *shared.BatchRequest `json:"data,omitempty"`
}

type CreateBatchRequest200ApplicationJSON struct {
	Data []shared.BatchResponse `json:"data,omitempty"`
}

type CreateBatchRequestRequest struct {
	QueryParams CreateBatchRequestQueryParams
	Request     CreateBatchRequestRequestBody `request:"mediaType=application/json"`
}

type CreateBatchRequestResponse struct {
	ContentType                                string
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	CreateBatchRequest200ApplicationJSONObject *CreateBatchRequest200ApplicationJSON
}
