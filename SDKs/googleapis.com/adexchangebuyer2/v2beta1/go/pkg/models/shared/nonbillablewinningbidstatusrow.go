package shared

type NonBillableWinningBidStatusRowStatusEnum string

const (
	NonBillableWinningBidStatusRowStatusEnumStatusUnspecified NonBillableWinningBidStatusRowStatusEnum = "STATUS_UNSPECIFIED"
	NonBillableWinningBidStatusRowStatusEnumAdNotRendered     NonBillableWinningBidStatusRowStatusEnum = "AD_NOT_RENDERED"
	NonBillableWinningBidStatusRowStatusEnumInvalidImpression NonBillableWinningBidStatusRowStatusEnum = "INVALID_IMPRESSION"
	NonBillableWinningBidStatusRowStatusEnumFatalVastError    NonBillableWinningBidStatusRowStatusEnum = "FATAL_VAST_ERROR"
	NonBillableWinningBidStatusRowStatusEnumLostInMediation   NonBillableWinningBidStatusRowStatusEnum = "LOST_IN_MEDIATION"
)

// NonBillableWinningBidStatusRow
// The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
type NonBillableWinningBidStatusRow struct {
	BidCount      *MetricValue                              `json:"bidCount,omitempty"`
	RowDimensions *RowDimensions                            `json:"rowDimensions,omitempty"`
	Status        *NonBillableWinningBidStatusRowStatusEnum `json:"status,omitempty"`
}
