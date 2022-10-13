package shared

type Connection struct {
	CloudSQL         *CloudSQLProperties `json:"cloudSql"`
	CreationTime     *string             `json:"creationTime"`
	Description      *string             `json:"description"`
	FriendlyName     *string             `json:"friendlyName"`
	HasCredential    *bool               `json:"hasCredential"`
	LastModifiedTime *string             `json:"lastModifiedTime"`
	Name             *string             `json:"name"`
}
