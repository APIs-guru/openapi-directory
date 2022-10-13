package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDropletRequestBody1 struct {
	Backups           *bool         `json:"backups"`
	Image             interface{}   `json:"image"`
	Ipv6              *bool         `json:"ipv6"`
	Monitoring        *bool         `json:"monitoring"`
	Name              string        `json:"name"`
	PrivateNetworking *bool         `json:"private_networking"`
	Region            string        `json:"region"`
	Size              string        `json:"size"`
	SSHKeys           []interface{} `json:"ssh_keys"`
	Tags              []string      `json:"tags"`
	UserData          *string       `json:"user_data"`
	VpcUUID           *string       `json:"vpc_uuid"`
	WithDropletAgent  *bool         `json:"with_droplet_agent"`
}

type CreateDropletRequestBody2 struct {
	Backups           *bool         `json:"backups"`
	Image             interface{}   `json:"image"`
	Ipv6              *bool         `json:"ipv6"`
	Monitoring        *bool         `json:"monitoring"`
	Names             []string      `json:"names"`
	PrivateNetworking *bool         `json:"private_networking"`
	Region            string        `json:"region"`
	Size              string        `json:"size"`
	SSHKeys           []interface{} `json:"ssh_keys"`
	Tags              []string      `json:"tags"`
	UserData          *string       `json:"user_data"`
	VpcUUID           *string       `json:"vpc_uuid"`
	WithDropletAgent  *bool         `json:"with_droplet_agent"`
}

type CreateDropletRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type CreateDroplet401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateDropletResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDroplet202ApplicationJSONOneOf                      *interface{}
	CreateDroplet401ApplicationJSONObject                     *CreateDroplet401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
