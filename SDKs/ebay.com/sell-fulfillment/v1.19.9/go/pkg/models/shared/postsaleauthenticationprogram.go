package shared

// PostSaleAuthenticationProgram
// This type is used to provide the status and outcome of an order line item going through the Authenticity Guarantee verification process.
type PostSaleAuthenticationProgram struct {
	OutcomeReason *string `json:"outcomeReason,omitempty"`
	Status        *string `json:"status,omitempty"`
}
