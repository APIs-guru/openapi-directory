package shared

// OrderableClusterOption
// Describes an orderable cluster option.
type OrderableClusterOption struct {
	AvailabilityZones []AvailabilityZone
	ClusterType       *string
	ClusterVersion    *string
	NodeType          *string
}
