package shared



type ItvUpdateProfileRequest struct {
    DateOfBirth *string `json:"dateOfBirth,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    ProfileToken string `json:"profileToken"`
    Title *string `json:"title,omitempty"`
    
}

