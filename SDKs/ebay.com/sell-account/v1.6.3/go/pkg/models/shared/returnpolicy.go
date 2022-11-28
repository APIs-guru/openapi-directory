package shared

// ReturnPolicy
// Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
type ReturnPolicy struct {
	CategoryTypes                 []CategoryType                   `json:"categoryTypes,omitempty"`
	Description                   *string                          `json:"description,omitempty"`
	ExtendedHolidayReturnsOffered *bool                            `json:"extendedHolidayReturnsOffered,omitempty"`
	InternationalOverride         *InternationalReturnOverrideType `json:"internationalOverride,omitempty"`
	MarketplaceID                 *string                          `json:"marketplaceId,omitempty"`
	Name                          *string                          `json:"name,omitempty"`
	RefundMethod                  *string                          `json:"refundMethod,omitempty"`
	RestockingFeePercentage       *string                          `json:"restockingFeePercentage,omitempty"`
	ReturnInstructions            *string                          `json:"returnInstructions,omitempty"`
	ReturnMethod                  *string                          `json:"returnMethod,omitempty"`
	ReturnPeriod                  *TimeDuration                    `json:"returnPeriod,omitempty"`
	ReturnPolicyID                *string                          `json:"returnPolicyId,omitempty"`
	ReturnShippingCostPayer       *string                          `json:"returnShippingCostPayer,omitempty"`
	ReturnsAccepted               *bool                            `json:"returnsAccepted,omitempty"`
}
