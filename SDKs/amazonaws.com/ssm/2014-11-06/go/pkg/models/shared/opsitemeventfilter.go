package shared



type OpsItemEventFilter struct {
    Key OpsItemEventFilterKeyEnum `json:"Key"`
    Operator OpsItemEventFilterOperatorEnum `json:"Operator"`
    Values []string `json:"Values"`
    
}

