package shared



type ItvCurrentSubscription struct {
    CancelAtPeriodEnd bool `json:"cancelAtPeriodEnd"`
    CollectionMethod string `json:"collectionMethod"`
    Created int32 `json:"created"`
    CurrentPeriodEnd int32 `json:"currentPeriodEnd"`
    CurrentPeriodStart int32 `json:"currentPeriodStart"`
    Plan map[string]interface{} `json:"plan"`
    Status string `json:"status"`
    
}

