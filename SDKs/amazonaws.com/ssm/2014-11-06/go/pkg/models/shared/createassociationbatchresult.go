package shared

type CreateAssociationBatchResult struct {
	Failed     []FailedCreateAssociation `json:"Failed"`
	Successful []AssociationDescription  `json:"Successful"`
}
