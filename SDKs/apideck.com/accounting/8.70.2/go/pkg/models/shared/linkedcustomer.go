package shared



type LinkedCustomer struct {
    CompanyName *string `json:"company_name,omitempty"`
    DisplayID *string `json:"display_id,omitempty"`
    DisplayName *string `json:"display_name,omitempty"`
    ID string `json:"id"`
    Name *string `json:"name,omitempty"`
    
}

