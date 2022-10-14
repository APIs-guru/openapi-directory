package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageActionPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ImageID  int64 `pathParam:"style=simple,explode=false,name=image_id"`
}

type GetImageActionRequest struct {
	PathParams GetImageActionPathParams
}

type GetImageAction401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetImageActionResponse struct {
	ContentType                                                                           string
	Headers                                                                               map[string][]string
	StatusCode                                                                            int64
	GetImageAction401ApplicationJSONObject                                                *GetImageAction401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                             *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems *shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems
}
