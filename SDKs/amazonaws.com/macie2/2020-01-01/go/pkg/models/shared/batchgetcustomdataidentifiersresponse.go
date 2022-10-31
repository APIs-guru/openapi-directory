package shared



type BatchGetCustomDataIdentifiersResponse struct {
    CustomDataIdentifiers []BatchGetCustomDataIdentifierSummary `json:"customDataIdentifiers,omitempty"`
    NotFoundIdentifierIds []string `json:"notFoundIdentifierIds,omitempty"`
    
}

