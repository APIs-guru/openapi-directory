package shared

// User
// You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
type User struct {
	ACLNames             []string        `json:"ACLNames,omitempty"`
	Arn                  *string         `json:"ARN,omitempty"`
	AccessString         *string         `json:"AccessString,omitempty"`
	Authentication       *Authentication `json:"Authentication,omitempty"`
	MinimumEngineVersion *string         `json:"MinimumEngineVersion,omitempty"`
	Name                 *string         `json:"Name,omitempty"`
	Status               *string         `json:"Status,omitempty"`
}
