package shared



type PosBankAccountAchDetails struct {
    AccountNumberSuffix *string `json:"account_number_suffix,omitempty"`
    AccountType *string `json:"account_type,omitempty"`
    RoutingNumber *string `json:"routing_number,omitempty"`
    
}

type PosBankAccount struct {
    AccountOwnershipType *string `json:"account_ownership_type,omitempty"`
    AchDetails *PosBankAccountAchDetails `json:"ach_details,omitempty"`
    BankName *string `json:"bank_name,omitempty"`
    Country *string `json:"country,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    StatementDescription *string `json:"statement_description,omitempty"`
    TransferType *string `json:"transfer_type,omitempty"`
    
}

