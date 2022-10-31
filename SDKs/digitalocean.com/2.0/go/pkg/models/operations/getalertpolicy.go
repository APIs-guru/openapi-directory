package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertPolicyPathParams struct {
	AlertUUID string `pathParam:"style=simple,explode=false,name=alert_uuid"`
}

type GetAlertPolicyRequest struct {
	PathParams GetAlertPolicyPathParams
}

type GetAlertPolicy401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetAlertPolicyResponse struct {
	ContentType                                                                                      string
	Headers                                                                                          map[string][]string
	StatusCode                                                                                       int64
	GetAlertPolicy401ApplicationJSONObject                                                           *GetAlertPolicy401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                                        *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems *shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems
}
