package shared



type UpdateRelationalDatabaseRequest struct {
    ApplyImmediately *bool `json:"applyImmediately,omitempty"`
    CaCertificateIdentifier *string `json:"caCertificateIdentifier,omitempty"`
    DisableBackupRetention *bool `json:"disableBackupRetention,omitempty"`
    EnableBackupRetention *bool `json:"enableBackupRetention,omitempty"`
    MasterUserPassword *string `json:"masterUserPassword,omitempty"`
    PreferredBackupWindow *string `json:"preferredBackupWindow,omitempty"`
    PreferredMaintenanceWindow *string `json:"preferredMaintenanceWindow,omitempty"`
    PubliclyAccessible *bool `json:"publiclyAccessible,omitempty"`
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    RotateMasterUserPassword *bool `json:"rotateMasterUserPassword,omitempty"`
    
}

