package shared



type SourceServer struct {
    Arn *string `json:"arn,omitempty"`
    DataReplicationInfo *DataReplicationInfo `json:"dataReplicationInfo,omitempty"`
    IsArchived *bool `json:"isArchived,omitempty"`
    LaunchedInstance *LaunchedInstance `json:"launchedInstance,omitempty"`
    LifeCycle *LifeCycle `json:"lifeCycle,omitempty"`
    SourceProperties *SourceProperties `json:"sourceProperties,omitempty"`
    SourceServerID *string `json:"sourceServerID,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

