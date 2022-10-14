package shared

import (
	"time"
)

type Category struct {
	Count                          *int64        `json:"count,omitempty"`
	CreatedAt                      *time.Time    `json:"created_at,omitempty"`
	Description                    *string       `json:"description,omitempty"`
	ID                             *string       `json:"id,omitempty"`
	ListingDescriptionTextTemplate *string       `json:"listing_description_text_template,omitempty"`
	ListingFeaturesTextTemplate    *string       `json:"listing_features_text_template,omitempty"`
	ListingPricingTextTemplate     *string       `json:"listing_pricing_text_template,omitempty"`
	Logo                           *Logo         `json:"logo,omitempty"`
	Name                           string        `json:"name"`
	Slug                           string        `json:"slug"`
	Translations                   []Translation `json:"translations,omitempty"`
	UpdatedAt                      *time.Time    `json:"updated_at,omitempty"`
}
