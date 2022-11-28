package shared

// FailedCreateAssociation
// Describes a failed association.
type FailedCreateAssociation struct {
	Entry   *CreateAssociationBatchRequestEntry `json:"Entry,omitempty"`
	Fault   *FaultEnum                          `json:"Fault,omitempty"`
	Message *string                             `json:"Message,omitempty"`
}
