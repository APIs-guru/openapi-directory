package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVpcPathParams struct {
	VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
}

type DeleteVpcRequest struct {
	PathParams DeleteVpcPathParams
}

type DeleteVpc401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteVpcResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteVpc401ApplicationJSONObject                         *DeleteVpc401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
