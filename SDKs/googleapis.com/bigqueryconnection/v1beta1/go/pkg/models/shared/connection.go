package shared

// ConnectionInput
// Configuration parameters to establish connection with an external data source, except the credential attributes.
type ConnectionInput struct {
	CloudSQL     *CloudSQLPropertiesInput `json:"cloudSql,omitempty"`
	Description  *string                  `json:"description,omitempty"`
	FriendlyName *string                  `json:"friendlyName,omitempty"`
	Name         *string                  `json:"name,omitempty"`
}

// Connection
// Configuration parameters to establish connection with an external data source, except the credential attributes.
type Connection struct {
	CloudSQL         *CloudSQLProperties `json:"cloudSql,omitempty"`
	CreationTime     *string             `json:"creationTime,omitempty"`
	Description      *string             `json:"description,omitempty"`
	FriendlyName     *string             `json:"friendlyName,omitempty"`
	HasCredential    *bool               `json:"hasCredential,omitempty"`
	LastModifiedTime *string             `json:"lastModifiedTime,omitempty"`
	Name             *string             `json:"name,omitempty"`
}
