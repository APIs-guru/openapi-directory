package shared



type StudentContact struct {
    District *string `json:"district,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneType *string `json:"phone_type,omitempty"`
    Relationship *string `json:"relationship,omitempty"`
    SisID *string `json:"sis_id,omitempty"`
    Student *string `json:"student,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

