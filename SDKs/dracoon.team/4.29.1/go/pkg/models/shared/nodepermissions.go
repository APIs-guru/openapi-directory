package shared



type NodePermissions struct {
    Change bool `json:"change"`
    Create bool `json:"create"`
    Delete bool `json:"delete"`
    DeleteRecycleBin bool `json:"deleteRecycleBin"`
    Manage bool `json:"manage"`
    ManageDownloadShare bool `json:"manageDownloadShare"`
    ManageUploadShare bool `json:"manageUploadShare"`
    Read bool `json:"read"`
    ReadRecycleBin bool `json:"readRecycleBin"`
    RestoreRecycleBin bool `json:"restoreRecycleBin"`
    
}

