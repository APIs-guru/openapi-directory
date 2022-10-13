package shared

type SourceServer struct {
	Arn                 *string              `json:"arn"`
	DataReplicationInfo *DataReplicationInfo `json:"dataReplicationInfo"`
	IsArchived          *bool                `json:"isArchived"`
	LaunchedInstance    *LaunchedInstance    `json:"launchedInstance"`
	LifeCycle           *LifeCycle           `json:"lifeCycle"`
	SourceProperties    *SourceProperties    `json:"sourceProperties"`
	SourceServerID      *string              `json:"sourceServerID"`
	Tags                map[string]string    `json:"tags"`
}
