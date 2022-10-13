package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFloatingIPPathParams struct {
	FloatingIP string `pathParam:"style=simple,explode=false,name=floating_ip"`
}

type DeleteFloatingIPRequest struct {
	PathParams DeleteFloatingIPPathParams
}

type DeleteFloatingIP401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteFloatingIPResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteFloatingIP401ApplicationJSONObject                  *DeleteFloatingIP401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
