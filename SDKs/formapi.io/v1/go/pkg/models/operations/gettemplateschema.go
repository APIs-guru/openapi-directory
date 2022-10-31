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

type GetTemplateSchemaTemplateSchema struct {
	DollarSchema         *string                `json:"$schema,omitempty"`
	AdditionalProperties *bool                  `json:"additionalProperties,omitempty"`
	Definitions          map[string]interface{} `json:"definitions,omitempty"`
	Description          *string                `json:"description,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	Properties           map[string]interface{} `json:"properties,omitempty"`
	Required             []interface{}          `json:"required,omitempty"`
	Title                *string                `json:"title,omitempty"`
	Type                 *string                `json:"type,omitempty"`
}

type GetTemplateSchemaResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	TemplateSchema      *GetTemplateSchemaTemplateSchema
}
