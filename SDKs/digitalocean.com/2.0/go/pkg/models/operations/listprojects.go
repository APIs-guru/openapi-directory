package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListProjects200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListProjects200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListProjects200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
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
	CreatedAt   *time.Time                                             `json:"created_at"`
	Description *string                                                `json:"description"`
	Environment *ListProjects200ApplicationJSONProjectsEnvironmentEnum `json:"environment"`
	ID          *string                                                `json:"id"`
	IsDefault   *bool                                                  `json:"is_default"`
	Name        *string                                                `json:"name"`
	OwnerID     *int64                                                 `json:"owner_id"`
	OwnerUUID   *string                                                `json:"owner_uuid"`
	Purpose     *string                                                `json:"purpose"`
	UpdatedAt   *time.Time                                             `json:"updated_at"`
}

type ListProjects200ApplicationJSON struct {
	Links    *ListProjects200ApplicationJSONLinks     `json:"links"`
	Meta     ListProjects200ApplicationJSONMeta       `json:"meta"`
	Projects []ListProjects200ApplicationJSONProjects `json:"projects"`
}

type ListProjects401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListProjectsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListProjects200ApplicationJSONObject                      *ListProjects200ApplicationJSON
	ListProjects401ApplicationJSONObject                      *ListProjects401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
