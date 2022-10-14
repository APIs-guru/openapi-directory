package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListProjects200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListProjects200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListProjects200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListProjects200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListProjects200ApplicationJSONProjectsEnvironmentEnum string

const (
	ListProjects200ApplicationJSONProjectsEnvironmentEnumDevelopment ListProjects200ApplicationJSONProjectsEnvironmentEnum = "Development"
	ListProjects200ApplicationJSONProjectsEnvironmentEnumStaging     ListProjects200ApplicationJSONProjectsEnvironmentEnum = "Staging"
	ListProjects200ApplicationJSONProjectsEnvironmentEnumProduction  ListProjects200ApplicationJSONProjectsEnvironmentEnum = "Production"
)

type ListProjects200ApplicationJSONProjects struct {
	CreatedAt   *time.Time                                             `json:"created_at,omitempty"`
	Description *string                                                `json:"description,omitempty"`
	Environment *ListProjects200ApplicationJSONProjectsEnvironmentEnum `json:"environment,omitempty"`
	ID          *string                                                `json:"id,omitempty"`
	IsDefault   *bool                                                  `json:"is_default,omitempty"`
	Name        *string                                                `json:"name,omitempty"`
	OwnerID     *int64                                                 `json:"owner_id,omitempty"`
	OwnerUUID   *string                                                `json:"owner_uuid,omitempty"`
	Purpose     *string                                                `json:"purpose,omitempty"`
	UpdatedAt   *time.Time                                             `json:"updated_at,omitempty"`
}

type ListProjects200ApplicationJSON struct {
	Links    *ListProjects200ApplicationJSONLinks     `json:"links,omitempty"`
	Meta     ListProjects200ApplicationJSONMeta       `json:"meta"`
	Projects []ListProjects200ApplicationJSONProjects `json:"projects,omitempty"`
}

type ListProjects401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListProjectsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListProjects200ApplicationJSONObject                      *ListProjects200ApplicationJSON
	ListProjects401ApplicationJSONObject                      *ListProjects401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
