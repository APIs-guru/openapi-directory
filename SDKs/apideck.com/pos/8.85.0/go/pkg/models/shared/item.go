package shared

import (
	"time"
)

type ItemPricingTypeEnum string

const (
	ItemPricingTypeEnumFixed    ItemPricingTypeEnum = "fixed"
	ItemPricingTypeEnumVariable ItemPricingTypeEnum = "variable"
	ItemPricingTypeEnumPerUnit  ItemPricingTypeEnum = "per_unit"
	ItemPricingTypeEnumOther    ItemPricingTypeEnum = "other"
)

type ItemProductTypeEnum string

const (
	ItemProductTypeEnumRegular ItemProductTypeEnum = "regular"
	ItemProductTypeEnumOther   ItemProductTypeEnum = "other"
)

type Item struct {
	Abbreviation          *string              `json:"abbreviation,omitempty"`
	AbsentAtLocationIds   []string             `json:"absent_at_location_ids,omitempty"`
	Available             *bool                `json:"available,omitempty"`
	AvailableForPickup    *bool                `json:"available_for_pickup,omitempty"`
	AvailableOnline       *bool                `json:"available_online,omitempty"`
	Categories            []interface{}        `json:"categories,omitempty"`
	Code                  *string              `json:"code,omitempty"`
	Cost                  *float64             `json:"cost,omitempty"`
	CreatedAt             *time.Time           `json:"created_at,omitempty"`
	CreatedBy             *string              `json:"created_by,omitempty"`
	Deleted               *bool                `json:"deleted,omitempty"`
	Description           *string              `json:"description,omitempty"`
	Hidden                *bool                `json:"hidden,omitempty"`
	ID                    *string              `json:"id,omitempty"`
	IdempotencyKey        *string              `json:"idempotency_key,omitempty"`
	ModifierGroups        []interface{}        `json:"modifier_groups,omitempty"`
	Name                  string               `json:"name"`
	Options               []interface{}        `json:"options,omitempty"`
	PresentAtAllLocations *bool                `json:"present_at_all_locations,omitempty"`
	PriceAmount           *float64             `json:"price_amount,omitempty"`
	PriceCurrency         *CurrencyEnum        `json:"price_currency,omitempty"`
	PricingType           *ItemPricingTypeEnum `json:"pricing_type,omitempty"`
	ProductType           *ItemProductTypeEnum `json:"product_type,omitempty"`
	Sku                   *string              `json:"sku,omitempty"`
	TaxIds                []string             `json:"tax_ids,omitempty"`
	UpdatedAt             *time.Time           `json:"updated_at,omitempty"`
	UpdatedBy             *string              `json:"updated_by,omitempty"`
	Variations            []interface{}        `json:"variations,omitempty"`
	Version               *string              `json:"version,omitempty"`
}

type ItemInput struct {
	Abbreviation          *string              `json:"abbreviation,omitempty"`
	AbsentAtLocationIds   []string             `json:"absent_at_location_ids,omitempty"`
	Available             *bool                `json:"available,omitempty"`
	AvailableForPickup    *bool                `json:"available_for_pickup,omitempty"`
	AvailableOnline       *bool                `json:"available_online,omitempty"`
	Categories            []interface{}        `json:"categories,omitempty"`
	Code                  *string              `json:"code,omitempty"`
	Cost                  *float64             `json:"cost,omitempty"`
	Deleted               *bool                `json:"deleted,omitempty"`
	Description           *string              `json:"description,omitempty"`
	Hidden                *bool                `json:"hidden,omitempty"`
	ID                    *string              `json:"id,omitempty"`
	IdempotencyKey        *string              `json:"idempotency_key,omitempty"`
	ModifierGroups        []interface{}        `json:"modifier_groups,omitempty"`
	Name                  string               `json:"name"`
	Options               []interface{}        `json:"options,omitempty"`
	PresentAtAllLocations *bool                `json:"present_at_all_locations,omitempty"`
	PriceAmount           *float64             `json:"price_amount,omitempty"`
	PriceCurrency         *CurrencyEnum        `json:"price_currency,omitempty"`
	PricingType           *ItemPricingTypeEnum `json:"pricing_type,omitempty"`
	ProductType           *ItemProductTypeEnum `json:"product_type,omitempty"`
	Sku                   *string              `json:"sku,omitempty"`
	TaxIds                []string             `json:"tax_ids,omitempty"`
	Variations            []interface{}        `json:"variations,omitempty"`
}
