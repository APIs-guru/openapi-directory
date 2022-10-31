package shared

type Program struct {
	AuthenticityVerification *PostSaleAuthenticationProgram `json:"authenticityVerification,omitempty"`
	FulfillmentProgram       *EbayFulfillmentProgram        `json:"fulfillmentProgram,omitempty"`
}
