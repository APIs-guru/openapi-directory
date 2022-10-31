package shared



type Connection struct {
    CloudSQL *CloudSQLProperties `json:"cloudSql,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    HasCredential *bool `json:"hasCredential,omitempty"`
    LastModifiedTime *string `json:"lastModifiedTime,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

