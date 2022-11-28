package shared

// InstanceEntry
// Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
type InstanceEntry struct {
	AvailabilityZone string                 `json:"availabilityZone"`
	InstanceType     string                 `json:"instanceType"`
	PortInfoSource   PortInfoSourceTypeEnum `json:"portInfoSource"`
	SourceName       string                 `json:"sourceName"`
	UserData         *string                `json:"userData,omitempty"`
}
