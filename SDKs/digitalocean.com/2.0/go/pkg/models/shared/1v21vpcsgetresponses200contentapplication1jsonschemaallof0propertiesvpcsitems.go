package shared

import (
	"time"
)

type Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems struct {
	CreatedAt   *time.Time `json:"created_at"`
	Default     *bool      `json:"default"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	IPRange     *string    `json:"ip_range"`
	Name        *string    `json:"name"`
	Region      *string    `json:"region"`
	Urn         *string    `json:"urn"`
}
