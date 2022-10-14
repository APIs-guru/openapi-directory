package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAlertPolicyPathParams struct {
	AlertUUID string `pathParam:"style=simple,explode=false,name=alert_uuid"`
}

type DeleteAlertPolicyRequest struct {
	PathParams DeleteAlertPolicyPathParams
}

type DeleteAlertPolicy401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteAlertPolicyResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteAlertPolicy401ApplicationJSONObject                 *DeleteAlertPolicy401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
