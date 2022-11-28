package shared

type DbClusterCapacityInfo struct {
	CurrentCapacity      *int64
	DbClusterIdentifier  *string
	PendingCapacity      *int64
	SecondsBeforeTimeout *int64
	TimeoutAction        *string
}
