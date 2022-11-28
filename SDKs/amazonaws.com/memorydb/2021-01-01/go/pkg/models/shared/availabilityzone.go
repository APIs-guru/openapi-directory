package shared

// AvailabilityZone
// Indicates if the cluster has a Multi-AZ configuration (multiaz) or not (singleaz).
type AvailabilityZone struct {
	Name *string `json:"Name,omitempty"`
}
