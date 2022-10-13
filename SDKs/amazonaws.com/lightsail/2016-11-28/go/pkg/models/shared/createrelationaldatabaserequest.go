package shared

type CreateRelationalDatabaseRequest struct {
	AvailabilityZone              *string `json:"availabilityZone"`
	MasterDatabaseName            string  `json:"masterDatabaseName"`
	MasterUserPassword            *string `json:"masterUserPassword"`
	MasterUsername                string  `json:"masterUsername"`
	PreferredBackupWindow         *string `json:"preferredBackupWindow"`
	PreferredMaintenanceWindow    *string `json:"preferredMaintenanceWindow"`
	PubliclyAccessible            *bool   `json:"publiclyAccessible"`
	RelationalDatabaseBlueprintID string  `json:"relationalDatabaseBlueprintId"`
	RelationalDatabaseBundleID    string  `json:"relationalDatabaseBundleId"`
	RelationalDatabaseName        string  `json:"relationalDatabaseName"`
	Tags                          []Tag   `json:"tags"`
}
