package shared

// Program
// This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
type Program struct {
	AuthenticityVerification *PostSaleAuthenticationProgram `json:"authenticityVerification,omitempty"`
	FulfillmentProgram       *EbayFulfillmentProgram        `json:"fulfillmentProgram,omitempty"`
}
