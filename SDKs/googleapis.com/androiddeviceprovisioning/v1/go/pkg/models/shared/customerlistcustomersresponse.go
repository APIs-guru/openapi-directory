package shared



type CustomerListCustomersResponse struct {
    Customers []Company `json:"customers,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

