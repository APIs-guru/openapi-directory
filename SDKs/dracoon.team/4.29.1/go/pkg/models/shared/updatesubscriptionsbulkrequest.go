package shared



type UpdateSubscriptionsBulkRequest struct {
    IsSubscribed bool `json:"isSubscribed"`
    ObjectIds []int64 `json:"objectIds"`
    
}

