package shared



type IssueRefundRequest struct {
    Comment *string `json:"comment,omitempty"`
    OrderLevelRefundAmount *SimpleAmount `json:"orderLevelRefundAmount,omitempty"`
    ReasonForRefund *string `json:"reasonForRefund,omitempty"`
    RefundItems []RefundItem `json:"refundItems,omitempty"`
    
}

