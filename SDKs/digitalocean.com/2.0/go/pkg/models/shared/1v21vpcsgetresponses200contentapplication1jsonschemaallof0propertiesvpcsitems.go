package shared

import (
	"time"
)

type Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems struct {
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	Default     *bool      `json:"default,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	IPRange     *string    `json:"ip_range,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Region      *string    `json:"region,omitempty"`
	Urn         *string    `json:"urn,omitempty"`
}
