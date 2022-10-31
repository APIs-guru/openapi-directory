package shared



type QueryStringObject struct {
    Option *bool `json:"option,omitempty"`
    QueryStringsAllowList []string `json:"queryStringsAllowList,omitempty"`
    
}

