package shared



type Teacher struct {
    Created *string `json:"created,omitempty"`
    Credentials *Credentials `json:"credentials,omitempty"`
    District *string `json:"district,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    LastModified *string `json:"last_modified,omitempty"`
    Name *Name `json:"name,omitempty"`
    School *string `json:"school,omitempty"`
    Schools []string `json:"schools,omitempty"`
    SisID *string `json:"sis_id,omitempty"`
    StateID *string `json:"state_id,omitempty"`
    TeacherNumber *string `json:"teacher_number,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

