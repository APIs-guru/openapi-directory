package shared



type ListActivityTypesInput struct {
    Domain string `json:"domain"`
    MaximumPageSize *int64 `json:"maximumPageSize,omitempty"`
    Name *string `json:"name,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RegistrationStatus RegistrationStatusEnum `json:"registrationStatus"`
    ReverseOrder *bool `json:"reverseOrder,omitempty"`
    
}

