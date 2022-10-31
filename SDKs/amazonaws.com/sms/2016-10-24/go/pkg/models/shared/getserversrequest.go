package shared



type GetServersRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    VMServerAddressList []VMServerAddress `json:"vmServerAddressList,omitempty"`
    
}

