package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateProjectRequestBodyEnvironmentEnum string

const (
	CreateProjectRequestBodyEnvironmentEnumDevelopment CreateProjectRequestBodyEnvironmentEnum = "Development"
	CreateProjectRequestBodyEnvironmentEnumStaging     CreateProjectRequestBodyEnvironmentEnum = "Staging"
	CreateProjectRequestBodyEnvironmentEnumProduction  CreateProjectRequestBodyEnvironmentEnum = "Production"
)

type CreateProjectRequestBody struct {
	CreatedAt   *time.Time                               `json:"created_at"`
	Description *string                                  `json:"description"`
	Environment *CreateProjectRequestBodyEnvironmentEnum `json:"environment"`
	ID          *string                                  `json:"id"`
	Name        string                                   `json:"name"`
	OwnerID     *int64                                   `json:"owner_id"`
	OwnerUUID   *string                                  `json:"owner_uuid"`
	Purpose     string                                   `json:"purpose"`
	UpdatedAt   *time.Time                               `json:"updated_at"`
}

type CreateProjectRequest struct {
	Request CreateProjectRequestBody `request:"mediaType=application/json"`
}

type CreateProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateProject201ApplicationJSONAny                        *interface{}
	CreateProject401ApplicationJSONObject                     *CreateProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
