package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type UpdateProjectRequestBodyEnvironmentEnum string

const (
	UpdateProjectRequestBodyEnvironmentEnumDevelopment UpdateProjectRequestBodyEnvironmentEnum = "Development"
	UpdateProjectRequestBodyEnvironmentEnumStaging     UpdateProjectRequestBodyEnvironmentEnum = "Staging"
	UpdateProjectRequestBodyEnvironmentEnumProduction  UpdateProjectRequestBodyEnvironmentEnum = "Production"
)

type UpdateProjectRequestBody struct {
	CreatedAt   *time.Time                              `json:"created_at"`
	Description string                                  `json:"description"`
	Environment UpdateProjectRequestBodyEnvironmentEnum `json:"environment"`
	ID          *string                                 `json:"id"`
	IsDefault   bool                                    `json:"is_default"`
	Name        string                                  `json:"name"`
	OwnerID     *int64                                  `json:"owner_id"`
	OwnerUUID   *string                                 `json:"owner_uuid"`
	Purpose     string                                  `json:"purpose"`
	UpdatedAt   *time.Time                              `json:"updated_at"`
}

type UpdateProjectRequest struct {
	PathParams UpdateProjectPathParams
	Request    UpdateProjectRequestBody `request:"mediaType=application/json"`
}

type UpdateProject401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateProjectResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateProject200ApplicationJSONAny                        *interface{}
	UpdateProject401ApplicationJSONObject                     *UpdateProject401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
