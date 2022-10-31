package shared

type CreateRelationalDatabaseRequest struct {
	AvailabilityZone              *string `json:"availabilityZone,omitempty"`
	MasterDatabaseName            string  `json:"masterDatabaseName"`
	MasterUserPassword            *string `json:"masterUserPassword,omitempty"`
	MasterUsername                string  `json:"masterUsername"`
	PreferredBackupWindow         *string `json:"preferredBackupWindow,omitempty"`
	PreferredMaintenanceWindow    *string `json:"preferredMaintenanceWindow,omitempty"`
	PubliclyAccessible            *bool   `json:"publiclyAccessible,omitempty"`
	RelationalDatabaseBlueprintID string  `json:"relationalDatabaseBlueprintId"`
	RelationalDatabaseBundleID    string  `json:"relationalDatabaseBundleId"`
	RelationalDatabaseName        string  `json:"relationalDatabaseName"`
	Tags                          []Tag   `json:"tags,omitempty"`
}
