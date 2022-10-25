package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFloatingIPRequestBodyAssignToDroplet struct {
	DropletID int64 `json:"droplet_id"`
}

type CreateFloatingIPRequestBodyReserveToRegion struct {
	Region string `json:"region"`
}

type CreateFloatingIPRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateFloatingIP202ApplicationJSONLinks struct {
	Actions  []shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems `json:"actions,omitempty"`
	Droplets []shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems `json:"droplets,omitempty"`
}

type CreateFloatingIP202ApplicationJSON struct {
	FloatingIP *shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems `json:"floating_ip,omitempty"`
	Links      *CreateFloatingIP202ApplicationJSONLinks                                                              `json:"links,omitempty"`
}

type CreateFloatingIP401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateFloatingIPResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateFloatingIP202ApplicationJSONObject                  *CreateFloatingIP202ApplicationJSON
	CreateFloatingIP401ApplicationJSONObject                  *CreateFloatingIP401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
