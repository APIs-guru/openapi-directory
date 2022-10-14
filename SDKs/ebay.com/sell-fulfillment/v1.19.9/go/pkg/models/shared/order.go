package shared

type Order struct {
	Buyer                        *Buyer                        `json:"buyer,omitempty"`
	BuyerCheckoutNotes           *string                       `json:"buyerCheckoutNotes,omitempty"`
	CancelStatus                 *CancelStatus                 `json:"cancelStatus,omitempty"`
	CreationDate                 *string                       `json:"creationDate,omitempty"`
	EbayCollectAndRemitTax       *bool                         `json:"ebayCollectAndRemitTax,omitempty"`
	FulfillmentHrefs             []string                      `json:"fulfillmentHrefs,omitempty"`
	FulfillmentStartInstructions []FulfillmentStartInstruction `json:"fulfillmentStartInstructions,omitempty"`
	LastModifiedDate             *string                       `json:"lastModifiedDate,omitempty"`
	LegacyOrderID                *string                       `json:"legacyOrderId,omitempty"`
	LineItems                    []LineItem                    `json:"lineItems,omitempty"`
	OrderFulfillmentStatus       *string                       `json:"orderFulfillmentStatus,omitempty"`
	OrderID                      *string                       `json:"orderId,omitempty"`
	OrderPaymentStatus           *string                       `json:"orderPaymentStatus,omitempty"`
	PaymentSummary               *PaymentSummary               `json:"paymentSummary,omitempty"`
	PricingSummary               *PricingSummary               `json:"pricingSummary,omitempty"`
	Program                      *Program                      `json:"program,omitempty"`
	SalesRecordReference         *string                       `json:"salesRecordReference,omitempty"`
	SellerID                     *string                       `json:"sellerId,omitempty"`
	TotalFeeBasisAmount          *Amount                       `json:"totalFeeBasisAmount,omitempty"`
	TotalMarketplaceFee          *Amount                       `json:"totalMarketplaceFee,omitempty"`
}
