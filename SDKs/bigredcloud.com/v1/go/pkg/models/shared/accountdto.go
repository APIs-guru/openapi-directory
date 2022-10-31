package shared



type AccountDto struct {
    AccountGroup *string `json:"accountGroup,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    Code *string `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    
}

