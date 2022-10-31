package shared



type CreateContactRequest struct {
    Alias string `json:"Alias"`
    DisplayName *string `json:"DisplayName,omitempty"`
    IdempotencyToken *string `json:"IdempotencyToken,omitempty"`
    Plan Plan `json:"Plan"`
    Tags []Tag `json:"Tags,omitempty"`
    Type ContactTypeEnum `json:"Type"`
    
}

