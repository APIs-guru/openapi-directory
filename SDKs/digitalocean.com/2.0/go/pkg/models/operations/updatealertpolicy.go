package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAlertPolicyPathParams struct {
	AlertUUID string `pathParam:"style=simple,explode=false,name=alert_uuid"`
}

type UpdateAlertPolicyRequest struct {
	PathParams UpdateAlertPolicyPathParams
	Request    shared.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema `request:"mediaType=application/json"`
}

type UpdateAlertPolicy401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateAlertPolicyResponse struct {
	ContentType                                                                                      string
	Headers                                                                                          map[string][]string
	StatusCode                                                                                       int64
	UpdateAlertPolicy401ApplicationJSONObject                                                        *UpdateAlertPolicy401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                                        *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems *shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems
}
