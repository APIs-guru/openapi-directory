package shared

import (
	"time"
)

type Category struct {
	Count                          *int64        `json:"count"`
	CreatedAt                      *time.Time    `json:"created_at"`
	Description                    *string       `json:"description"`
	ID                             *string       `json:"id"`
	ListingDescriptionTextTemplate *string       `json:"listing_description_text_template"`
	ListingFeaturesTextTemplate    *string       `json:"listing_features_text_template"`
	ListingPricingTextTemplate     *string       `json:"listing_pricing_text_template"`
	Logo                           *Logo         `json:"logo"`
	Name                           string        `json:"name"`
	Slug                           string        `json:"slug"`
	Translations                   []Translation `json:"translations"`
	UpdatedAt                      *time.Time    `json:"updated_at"`
}
