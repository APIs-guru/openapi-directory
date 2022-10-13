package shared

type LineItem struct {
	AppliedPromotions               []AppliedPromotion               `json:"appliedPromotions"`
	DeliveryCost                    *DeliveryCost                    `json:"deliveryCost"`
	DiscountedLineItemCost          *Amount                          `json:"discountedLineItemCost"`
	EbayCollectAndRemitTaxes        []EbayCollectAndRemitTax         `json:"ebayCollectAndRemitTaxes"`
	GiftDetails                     *GiftDetails                     `json:"giftDetails"`
	ItemLocation                    *ItemLocation                    `json:"itemLocation"`
	LegacyItemID                    *string                          `json:"legacyItemId"`
	LegacyVariationID               *string                          `json:"legacyVariationId"`
	LineItemCost                    *Amount                          `json:"lineItemCost"`
	LineItemFulfillmentInstructions *LineItemFulfillmentInstructions `json:"lineItemFulfillmentInstructions"`
	LineItemFulfillmentStatus       *string                          `json:"lineItemFulfillmentStatus"`
	LineItemID                      *string                          `json:"lineItemId"`
	ListingMarketplaceID            *string                          `json:"listingMarketplaceId"`
	Properties                      *LineItemProperties              `json:"properties"`
	PurchaseMarketplaceID           *string                          `json:"purchaseMarketplaceId"`
	Quantity                        *int32                           `json:"quantity"`
	Refunds                         []LineItemRefund                 `json:"refunds"`
	Sku                             *string                          `json:"sku"`
	SoldFormat                      *string                          `json:"soldFormat"`
	Taxes                           []Tax                            `json:"taxes"`
	Title                           *string                          `json:"title"`
	Total                           *Amount                          `json:"total"`
}
