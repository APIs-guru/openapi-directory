package shared

type Order struct {
	Buyer                        *Buyer                        `json:"buyer"`
	BuyerCheckoutNotes           *string                       `json:"buyerCheckoutNotes"`
	CancelStatus                 *CancelStatus                 `json:"cancelStatus"`
	CreationDate                 *string                       `json:"creationDate"`
	EbayCollectAndRemitTax       *bool                         `json:"ebayCollectAndRemitTax"`
	FulfillmentHrefs             []string                      `json:"fulfillmentHrefs"`
	FulfillmentStartInstructions []FulfillmentStartInstruction `json:"fulfillmentStartInstructions"`
	LastModifiedDate             *string                       `json:"lastModifiedDate"`
	LegacyOrderID                *string                       `json:"legacyOrderId"`
	LineItems                    []LineItem                    `json:"lineItems"`
	OrderFulfillmentStatus       *string                       `json:"orderFulfillmentStatus"`
	OrderID                      *string                       `json:"orderId"`
	OrderPaymentStatus           *string                       `json:"orderPaymentStatus"`
	PaymentSummary               *PaymentSummary               `json:"paymentSummary"`
	PricingSummary               *PricingSummary               `json:"pricingSummary"`
	Program                      *Program                      `json:"program"`
	SalesRecordReference         *string                       `json:"salesRecordReference"`
	SellerID                     *string                       `json:"sellerId"`
	TotalFeeBasisAmount          *Amount                       `json:"totalFeeBasisAmount"`
	TotalMarketplaceFee          *Amount                       `json:"totalMarketplaceFee"`
}
