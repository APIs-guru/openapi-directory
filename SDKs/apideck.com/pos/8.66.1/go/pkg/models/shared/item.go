package shared

import (
	"time"
)

type ItemPricingTypePricingTypeEnum string

const (
	ItemPricingTypePricingTypeEnumFixed    ItemPricingTypePricingTypeEnum = "fixed"
	ItemPricingTypePricingTypeEnumVariable ItemPricingTypePricingTypeEnum = "variable"
	ItemPricingTypePricingTypeEnumPerUnit  ItemPricingTypePricingTypeEnum = "per_unit"
	ItemPricingTypePricingTypeEnumOther    ItemPricingTypePricingTypeEnum = "other"
)

type ItemProductTypeProductTypeEnum string

const (
	ItemProductTypeProductTypeEnumRegular ItemProductTypeProductTypeEnum = "regular"
	ItemProductTypeProductTypeEnumOther   ItemProductTypeProductTypeEnum = "other"
)

type Item struct {
	Abbreviation          *string                         `json:"abbreviation"`
	AbsentAtLocationIds   []string                        `json:"absent_at_location_ids"`
	Available             *bool                           `json:"available"`
	AvailableForPickup    *bool                           `json:"available_for_pickup"`
	AvailableOnline       *bool                           `json:"available_online"`
	Categories            []interface{}                   `json:"categories"`
	Code                  *string                         `json:"code"`
	Cost                  *float64                        `json:"cost"`
	CreatedAt             *time.Time                      `json:"created_at"`
	CreatedBy             *string                         `json:"created_by"`
	Deleted               *bool                           `json:"deleted"`
	Description           *string                         `json:"description"`
	Hidden                *bool                           `json:"hidden"`
	ID                    *string                         `json:"id"`
	IdempotencyKey        *string                         `json:"idempotency_key"`
	ModifierGroups        []interface{}                   `json:"modifier_groups"`
	Name                  string                          `json:"name"`
	Options               []interface{}                   `json:"options"`
	PresentAtAllLocations *bool                           `json:"present_at_all_locations"`
	PriceAmount           *float64                        `json:"price_amount"`
	PriceCurrency         *CurrencyEnum                   `json:"price_currency"`
	PricingType           *ItemPricingTypePricingTypeEnum `json:"pricing_type"`
	ProductType           *ItemProductTypeProductTypeEnum `json:"product_type"`
	Sku                   *string                         `json:"sku"`
	TaxIds                []string                        `json:"tax_ids"`
	UpdatedAt             *time.Time                      `json:"updated_at"`
	UpdatedBy             *string                         `json:"updated_by"`
	Variations            []interface{}                   `json:"variations"`
	Version               *string                         `json:"version"`
}
