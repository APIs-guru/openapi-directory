package shared

// CancelRequest
// This type contains information about a buyer request to cancel an order.
type CancelRequest struct {
	CancelCompletedDate *string `json:"cancelCompletedDate,omitempty"`
	CancelInitiator     *string `json:"cancelInitiator,omitempty"`
	CancelReason        *string `json:"cancelReason,omitempty"`
	CancelRequestID     *string `json:"cancelRequestId,omitempty"`
	CancelRequestState  *string `json:"cancelRequestState,omitempty"`
	CancelRequestedDate *string `json:"cancelRequestedDate,omitempty"`
}
