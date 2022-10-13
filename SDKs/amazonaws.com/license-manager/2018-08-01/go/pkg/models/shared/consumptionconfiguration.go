package shared

type ConsumptionConfiguration struct {
	BorrowConfiguration      *BorrowConfiguration      `json:"BorrowConfiguration"`
	ProvisionalConfiguration *ProvisionalConfiguration `json:"ProvisionalConfiguration"`
	RenewType                *RenewTypeEnum            `json:"RenewType"`
}
