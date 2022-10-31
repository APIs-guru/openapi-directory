package shared



type GetStaticIpsResult struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    StaticIps []StaticIP `json:"staticIps,omitempty"`
    
}

