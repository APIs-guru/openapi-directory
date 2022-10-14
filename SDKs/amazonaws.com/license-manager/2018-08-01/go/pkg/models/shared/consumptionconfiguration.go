package shared

type ConsumptionConfiguration struct {
	BorrowConfiguration      *BorrowConfiguration      `json:"BorrowConfiguration,omitempty"`
	ProvisionalConfiguration *ProvisionalConfiguration `json:"ProvisionalConfiguration,omitempty"`
	RenewType                *RenewTypeEnum            `json:"RenewType,omitempty"`
}
