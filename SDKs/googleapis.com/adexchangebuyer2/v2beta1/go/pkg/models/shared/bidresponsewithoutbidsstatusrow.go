package shared

type BidResponseWithoutBidsStatusRowStatusEnum string

const (
	BidResponseWithoutBidsStatusRowStatusEnumStatusUnspecified              BidResponseWithoutBidsStatusRowStatusEnum = "STATUS_UNSPECIFIED"
	BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBids           BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS"
	BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBidsForAccount BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"
	BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBidsForDeal    BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
)

// BidResponseWithoutBidsStatusRow
// The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
type BidResponseWithoutBidsStatusRow struct {
	ImpressionCount *MetricValue                               `json:"impressionCount,omitempty"`
	RowDimensions   *RowDimensions                             `json:"rowDimensions,omitempty"`
	Status          *BidResponseWithoutBidsStatusRowStatusEnum `json:"status,omitempty"`
}
