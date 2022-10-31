package shared



type DisassociateIPGroupsRequest struct {
    DirectoryID string `json:"DirectoryId"`
    GroupIds []string `json:"GroupIds"`
    
}

