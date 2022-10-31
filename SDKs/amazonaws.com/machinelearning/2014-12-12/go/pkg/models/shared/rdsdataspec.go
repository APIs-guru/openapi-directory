package shared



type RdsDataSpec struct {
    DataRearrangement *string `json:"DataRearrangement,omitempty"`
    DataSchema *string `json:"DataSchema,omitempty"`
    DataSchemaURI *string `json:"DataSchemaUri,omitempty"`
    DatabaseCredentials RdsDatabaseCredentials `json:"DatabaseCredentials"`
    DatabaseInformation RdsDatabase `json:"DatabaseInformation"`
    ResourceRole string `json:"ResourceRole"`
    S3StagingLocation string `json:"S3StagingLocation"`
    SecurityGroupIds []string `json:"SecurityGroupIds"`
    SelectSQLQuery string `json:"SelectSqlQuery"`
    ServiceRole string `json:"ServiceRole"`
    SubnetID string `json:"SubnetId"`
    
}

