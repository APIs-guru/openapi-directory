package shared

// PaymentPolicy
// Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
type PaymentPolicy struct {
	CategoryTypes       []CategoryType  `json:"categoryTypes,omitempty"`
	Deposit             *Deposit        `json:"deposit,omitempty"`
	Description         *string         `json:"description,omitempty"`
	FullPaymentDueIn    *TimeDuration   `json:"fullPaymentDueIn,omitempty"`
	ImmediatePay        *bool           `json:"immediatePay,omitempty"`
	MarketplaceID       *string         `json:"marketplaceId,omitempty"`
	Name                *string         `json:"name,omitempty"`
	PaymentInstructions *string         `json:"paymentInstructions,omitempty"`
	PaymentMethods      []PaymentMethod `json:"paymentMethods,omitempty"`
	PaymentPolicyID     *string         `json:"paymentPolicyId,omitempty"`
}
