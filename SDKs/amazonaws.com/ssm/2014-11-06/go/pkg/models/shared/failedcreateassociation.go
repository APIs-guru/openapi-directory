package shared

type FailedCreateAssociation struct {
	Entry   *CreateAssociationBatchRequestEntry `json:"Entry"`
	Fault   *FaultEnum                          `json:"Fault"`
	Message *string                             `json:"Message"`
}
