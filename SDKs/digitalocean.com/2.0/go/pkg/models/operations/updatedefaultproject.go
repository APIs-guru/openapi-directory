package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateDefaultProjectRequestBodyEnvironmentEnum string

const (
	UpdateDefaultProjectRequestBodyEnvironmentEnumDevelopment UpdateDefaultProjectRequestBodyEnvironmentEnum = "Development"
	UpdateDefaultProjectRequestBodyEnvironmentEnumStaging     UpdateDefaultProjectRequestBodyEnvironmentEnum = "Staging"
	UpdateDefaultProjectRequestBodyEnvironmentEnumProduction  UpdateDefaultProjectRequestBodyEnvironmentEnum = "Production"
)

type UpdateDefaultProjectRequestBody struct {
	CreatedAt   *time.Time                                     `json:"created_at,omitempty"`
	Description string                                         `json:"description"`
	Environment UpdateDefaultProjectRequestBodyEnvironmentEnum `json:"environment"`
	ID          *string                                        `json:"id,omitempty"`
	IsDefault   bool                                           `json:"is_default"`
	Name        string                                         `json:"name"`
	OwnerID     *int64                                         `json:"owner_id,omitempty"`
	OwnerUUID   *string                                        `json:"owner_uuid,omitempty"`
	Purpose     string                                         `json:"purpose"`
	UpdatedAt   *time.Time                                     `json:"updated_at,omitempty"`
}

type UpdateDefaultProjectRequest struct {
	Request UpdateDefaultProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateDefaultProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateDefaultProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateDefaultProject200ApplicationJSONAny                 *interface{}
	UpdateDefaultProject401ApplicationJSONObject              *UpdateDefaultProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
