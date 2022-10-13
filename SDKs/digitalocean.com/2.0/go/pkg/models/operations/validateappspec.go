package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateAppSpecRequestBody struct {
	AppID *string                                                                                                                                   `json:"app_id"`
	Spec  shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
}

type ValidateAppSpecRequest struct {
	Request ValidateAppSpecRequestBody `request:"mediaType=application/json"`
}

type ValidateAppSpec200ApplicationJSON struct {
	AppCost              *int32                                                                                                                                     `json:"app_cost"`
	AppIsStatic          *bool                                                                                                                                      `json:"app_is_static"`
	AppNameAvailable     *bool                                                                                                                                      `json:"app_name_available"`
	AppNameSuggestion    *string                                                                                                                                    `json:"app_name_suggestion"`
	AppTierDowngradeCost *int32                                                                                                                                     `json:"app_tier_downgrade_cost"`
	ExistingStaticApps   *string                                                                                                                                    `json:"existing_static_apps"`
	Spec                 *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
}

type ValidateAppSpec401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ValidateAppSpecResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ValidateAppSpec200ApplicationJSONObject                   *ValidateAppSpec200ApplicationJSON
	ValidateAppSpec401ApplicationJSONObject                   *ValidateAppSpec401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
