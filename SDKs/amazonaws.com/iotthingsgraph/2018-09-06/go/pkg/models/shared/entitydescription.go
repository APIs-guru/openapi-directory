package shared

import (
	"time"
)

type EntityDescription struct {
	Arn        *string             `json:"arn"`
	CreatedAt  *time.Time          `json:"createdAt"`
	Definition *DefinitionDocument `json:"definition"`
	ID         *string             `json:"id"`
	Type       *EntityTypeEnum     `json:"type"`
}
