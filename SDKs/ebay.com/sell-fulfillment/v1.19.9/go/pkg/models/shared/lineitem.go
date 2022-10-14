package shared

type LineItem struct {
	AppliedPromotions               []AppliedPromotion               `json:"appliedPromotions,omitempty"`
	DeliveryCost                    *DeliveryCost                    `json:"deliveryCost,omitempty"`
	DiscountedLineItemCost          *Amount                          `json:"discountedLineItemCost,omitempty"`
	EbayCollectAndRemitTaxes        []EbayCollectAndRemitTax         `json:"ebayCollectAndRemitTaxes,omitempty"`
	GiftDetails                     *GiftDetails                     `json:"giftDetails,omitempty"`
	ItemLocation                    *ItemLocation                    `json:"itemLocation,omitempty"`
	LegacyItemID                    *string                          `json:"legacyItemId,omitempty"`
	LegacyVariationID               *string                          `json:"legacyVariationId,omitempty"`
	LineItemCost                    *Amount                          `json:"lineItemCost,omitempty"`
	LineItemFulfillmentInstructions *LineItemFulfillmentInstructions `json:"lineItemFulfillmentInstructions,omitempty"`
	LineItemFulfillmentStatus       *string                          `json:"lineItemFulfillmentStatus,omitempty"`
	LineItemID                      *string                          `json:"lineItemId,omitempty"`
	ListingMarketplaceID            *string                          `json:"listingMarketplaceId,omitempty"`
	Properties                      *LineItemProperties              `json:"properties,omitempty"`
	PurchaseMarketplaceID           *string                          `json:"purchaseMarketplaceId,omitempty"`
	Quantity                        *int32                           `json:"quantity,omitempty"`
	Refunds                         []LineItemRefund                 `json:"refunds,omitempty"`
	Sku                             *string                          `json:"sku,omitempty"`
	SoldFormat                      *string                          `json:"soldFormat,omitempty"`
	Taxes                           []Tax                            `json:"taxes,omitempty"`
	Title                           *string                          `json:"title,omitempty"`
	Total                           *Amount                          `json:"total,omitempty"`
}
