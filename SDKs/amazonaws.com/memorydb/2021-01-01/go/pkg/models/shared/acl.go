package shared

type ACL struct {
	Arn                  *string            `json:"ARN"`
	Clusters             []string           `json:"Clusters"`
	MinimumEngineVersion *string            `json:"MinimumEngineVersion"`
	Name                 *string            `json:"Name"`
	PendingChanges       *ACLPendingChanges `json:"PendingChanges"`
	Status               *string            `json:"Status"`
	UserNames            []string           `json:"UserNames"`
}
