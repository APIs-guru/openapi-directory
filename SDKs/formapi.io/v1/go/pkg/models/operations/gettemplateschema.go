package operations

import (
	"openapi/pkg/models/shared"
)

type GetTemplateSchemaPathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=template_id"`
}

type GetTemplateSchemaSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTemplateSchemaRequest struct {
	PathParams GetTemplateSchemaPathParams
	Security   GetTemplateSchemaSecurity
}

type GetTemplateSchema200ApplicationJSONTemplateSchema struct {
	DollarSchema         *string                `json:"$schema"`
	AdditionalProperties *bool                  `json:"additionalProperties"`
	Definitions          map[string]interface{} `json:"definitions"`
	Description          *string                `json:"description"`
	ID                   *string                `json:"id"`
	Properties           map[string]interface{} `json:"properties"`
	Required             []interface{}          `json:"required"`
	Title                *string                `json:"title"`
	Type                 *string                `json:"type"`
}

type GetTemplateSchemaResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	TemplateSchema      *GetTemplateSchema200ApplicationJSONTemplateSchema
}
