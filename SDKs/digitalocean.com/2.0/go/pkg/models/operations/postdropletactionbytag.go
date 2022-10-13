package operations

import (
	"openapi/pkg/models/shared"
)

type PostDropletActionByTagQueryParams struct {
	TagName *string `queryParam:"style=form,explode=true,name=tag_name"`
}

type PostDropletActionByTagRequest struct {
	QueryParams PostDropletActionByTagQueryParams
	Request     *interface{} `request:"mediaType=application/json"`
}

type PostDropletActionByTag401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type PostDropletActionByTagResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	PostDropletActionByTag201ApplicationJSONAny               *interface{}
	PostDropletActionByTag401ApplicationJSONObject            *PostDropletActionByTag401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
