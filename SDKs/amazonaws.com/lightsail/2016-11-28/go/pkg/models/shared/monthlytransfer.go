package shared

// MonthlyTransfer
// Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
type MonthlyTransfer struct {
	GbPerMonthAllocated *int64 `json:"gbPerMonthAllocated,omitempty"`
}
