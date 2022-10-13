package operations

import (
	"openapi/pkg/models/shared"
)

type RetryDestroyWithAssociatedResourcePathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type RetryDestroyWithAssociatedResourceRequest struct {
	PathParams RetryDestroyWithAssociatedResourcePathParams
}

type RetryDestroyWithAssociatedResource401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type RetryDestroyWithAssociatedResourceResponse struct {
	ContentType                                                string
	Headers                                                    map[string][]string
	StatusCode                                                 int64
	RetryDestroyWithAssociatedResource401ApplicationJSONObject *RetryDestroyWithAssociatedResource401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema  *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
