package shared

// ConsumptionConfiguration
// Details about a consumption configuration.
type ConsumptionConfiguration struct {
	BorrowConfiguration      *BorrowConfiguration      `json:"BorrowConfiguration,omitempty"`
	ProvisionalConfiguration *ProvisionalConfiguration `json:"ProvisionalConfiguration,omitempty"`
	RenewType                *RenewTypeEnum            `json:"RenewType,omitempty"`
}
