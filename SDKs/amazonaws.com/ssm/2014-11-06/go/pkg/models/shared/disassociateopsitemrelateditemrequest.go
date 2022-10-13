package shared

type DisassociateOpsItemRelatedItemRequest struct {
	AssociationID string `json:"AssociationId"`
	OpsItemID     string `json:"OpsItemId"`
}
