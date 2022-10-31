package shared

type ClusterStateEnum string

const (
	ClusterStateEnumAwaitingQuorum ClusterStateEnum = "AwaitingQuorum"
	ClusterStateEnumPending        ClusterStateEnum = "Pending"
	ClusterStateEnumInUse          ClusterStateEnum = "InUse"
	ClusterStateEnumComplete       ClusterStateEnum = "Complete"
	ClusterStateEnumCancelled      ClusterStateEnum = "Cancelled"
)
