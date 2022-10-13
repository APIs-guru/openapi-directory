package shared

type NonBillableWinningBidStatusRowStatusEnum string

const (
	NonBillableWinningBidStatusRowStatusEnumStatusUnspecified NonBillableWinningBidStatusRowStatusEnum = "STATUS_UNSPECIFIED"
	NonBillableWinningBidStatusRowStatusEnumAdNotRendered     NonBillableWinningBidStatusRowStatusEnum = "AD_NOT_RENDERED"
	NonBillableWinningBidStatusRowStatusEnumInvalidImpression NonBillableWinningBidStatusRowStatusEnum = "INVALID_IMPRESSION"
	NonBillableWinningBidStatusRowStatusEnumFatalVastError    NonBillableWinningBidStatusRowStatusEnum = "FATAL_VAST_ERROR"
	NonBillableWinningBidStatusRowStatusEnumLostInMediation   NonBillableWinningBidStatusRowStatusEnum = "LOST_IN_MEDIATION"
)

type NonBillableWinningBidStatusRow struct {
	BidCount      *MetricValue                              `json:"bidCount"`
	RowDimensions *RowDimensions                            `json:"rowDimensions"`
	Status        *NonBillableWinningBidStatusRowStatusEnum `json:"status"`
}
