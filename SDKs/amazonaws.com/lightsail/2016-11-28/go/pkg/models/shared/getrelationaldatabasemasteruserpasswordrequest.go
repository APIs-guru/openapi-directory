package shared



type GetRelationalDatabaseMasterUserPasswordRequest struct {
    PasswordVersion *RelationalDatabasePasswordVersionEnum `json:"passwordVersion,omitempty"`
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    
}

