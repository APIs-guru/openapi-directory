package shared

// FailoverState
// Contains the state of scheduled or in-process failover operations on an Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover operation is scheduled or is currently underway on the Aurora global database.
type FailoverState struct {
	FromDbClusterArn *string
	Status           *FailoverStatusEnum
	ToDbClusterArn   *string
}
