package shared




type BidResponseWithoutBidsStatusRowStatusEnum string

const (
    BidResponseWithoutBidsStatusRowStatusEnumStatusUnspecified BidResponseWithoutBidsStatusRowStatusEnum = "STATUS_UNSPECIFIED"
BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBids BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS"
BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBidsForAccount BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"
BidResponseWithoutBidsStatusRowStatusEnumResponsesWithoutBidsForDeal BidResponseWithoutBidsStatusRowStatusEnum = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
)


type BidResponseWithoutBidsStatusRow struct {
    ImpressionCount *MetricValue `json:"impressionCount,omitempty"`
    RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
    Status *BidResponseWithoutBidsStatusRowStatusEnum `json:"status,omitempty"`
    
}

