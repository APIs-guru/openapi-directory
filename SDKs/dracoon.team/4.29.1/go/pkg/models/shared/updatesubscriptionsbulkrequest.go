package shared

// UpdateSubscriptionsBulkRequest
// Request model for updating subscriptions
type UpdateSubscriptionsBulkRequest struct {
	IsSubscribed bool    `json:"isSubscribed"`
	ObjectIds    []int64 `json:"objectIds"`
}
