package shared

// Testers
// The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
type Testers struct {
	GoogleGroups []string `json:"googleGroups,omitempty"`
}
