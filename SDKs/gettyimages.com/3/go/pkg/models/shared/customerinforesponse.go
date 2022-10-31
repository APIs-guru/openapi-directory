package shared



type CustomerInfoResponse struct {
    FirstName *string `json:"first_name,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    MiddleName *string `json:"middle_name,omitempty"`
    
}

