package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAppRequest struct {
	PathParams DeleteAppPathParams
}

type DeleteApp200ApplicationJSON struct {
	ID *string `json:"id,omitempty"`
}

type DeleteApp401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteAppResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteApp200ApplicationJSONObject                         *DeleteApp200ApplicationJSON
	DeleteApp401ApplicationJSONObject                         *DeleteApp401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
