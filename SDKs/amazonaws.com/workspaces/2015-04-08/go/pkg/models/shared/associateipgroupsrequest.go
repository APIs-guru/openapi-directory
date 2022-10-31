package shared



type AssociateIPGroupsRequest struct {
    DirectoryID string `json:"DirectoryId"`
    GroupIds []string `json:"GroupIds"`
    
}

