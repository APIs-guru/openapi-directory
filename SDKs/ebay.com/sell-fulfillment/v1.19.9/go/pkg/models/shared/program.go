package shared

type Program struct {
	AuthenticityVerification *PostSaleAuthenticationProgram `json:"authenticityVerification"`
	FulfillmentProgram       *EbayFulfillmentProgram        `json:"fulfillmentProgram"`
}
