package shared



type CreateAssociationBatchResult struct {
    Failed []FailedCreateAssociation `json:"Failed,omitempty"`
    Successful []AssociationDescription `json:"Successful,omitempty"`
    
}

