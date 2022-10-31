package shared



type CreateWebACLRequest struct {
    ChangeToken string `json:"ChangeToken"`
    DefaultAction WafAction `json:"DefaultAction"`
    MetricName string `json:"MetricName"`
    Name string `json:"Name"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

