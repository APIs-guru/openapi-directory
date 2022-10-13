package shared

type ReturnPolicyRequest struct {
	CategoryTypes                 []CategoryType                   `json:"categoryTypes"`
	Description                   *string                          `json:"description"`
	ExtendedHolidayReturnsOffered *bool                            `json:"extendedHolidayReturnsOffered"`
	InternationalOverride         *InternationalReturnOverrideType `json:"internationalOverride"`
	MarketplaceID                 *string                          `json:"marketplaceId"`
	Name                          *string                          `json:"name"`
	RefundMethod                  *string                          `json:"refundMethod"`
	RestockingFeePercentage       *string                          `json:"restockingFeePercentage"`
	ReturnInstructions            *string                          `json:"returnInstructions"`
	ReturnMethod                  *string                          `json:"returnMethod"`
	ReturnPeriod                  *TimeDuration                    `json:"returnPeriod"`
	ReturnShippingCostPayer       *string                          `json:"returnShippingCostPayer"`
	ReturnsAccepted               *bool                            `json:"returnsAccepted"`
}
