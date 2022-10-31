package shared



type AssociateOpsItemRelatedItemRequest struct {
    AssociationType string `json:"AssociationType"`
    OpsItemID string `json:"OpsItemId"`
    ResourceType string `json:"ResourceType"`
    ResourceURI string `json:"ResourceUri"`
    
}

