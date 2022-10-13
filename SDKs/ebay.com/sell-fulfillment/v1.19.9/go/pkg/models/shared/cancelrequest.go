package shared

type CancelRequest struct {
	CancelCompletedDate *string `json:"cancelCompletedDate"`
	CancelInitiator     *string `json:"cancelInitiator"`
	CancelReason        *string `json:"cancelReason"`
	CancelRequestID     *string `json:"cancelRequestId"`
	CancelRequestState  *string `json:"cancelRequestState"`
	CancelRequestedDate *string `json:"cancelRequestedDate"`
}
