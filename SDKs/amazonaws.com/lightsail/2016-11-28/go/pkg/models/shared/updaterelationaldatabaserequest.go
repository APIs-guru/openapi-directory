package shared

type UpdateRelationalDatabaseRequest struct {
	ApplyImmediately           *bool   `json:"applyImmediately"`
	CaCertificateIdentifier    *string `json:"caCertificateIdentifier"`
	DisableBackupRetention     *bool   `json:"disableBackupRetention"`
	EnableBackupRetention      *bool   `json:"enableBackupRetention"`
	MasterUserPassword         *string `json:"masterUserPassword"`
	PreferredBackupWindow      *string `json:"preferredBackupWindow"`
	PreferredMaintenanceWindow *string `json:"preferredMaintenanceWindow"`
	PubliclyAccessible         *bool   `json:"publiclyAccessible"`
	RelationalDatabaseName     string  `json:"relationalDatabaseName"`
	RotateMasterUserPassword   *bool   `json:"rotateMasterUserPassword"`
}
