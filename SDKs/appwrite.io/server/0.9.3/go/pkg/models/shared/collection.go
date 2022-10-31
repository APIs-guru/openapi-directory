package shared



type Collection struct {
    DollarID string `json:"$id"`
    DollarPermissions map[string]interface{} `json:"$permissions"`
    DateCreated int32 `json:"dateCreated"`
    DateUpdated int32 `json:"dateUpdated"`
    Name string `json:"name"`
    Rules []Rule `json:"rules"`
    
}

