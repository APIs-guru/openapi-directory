package shared

// GcpUserAccessBinding
// Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
type GcpUserAccessBinding struct {
	AccessLevels []string `json:"accessLevels,omitempty"`
	GroupKey     *string  `json:"groupKey,omitempty"`
	Name         *string  `json:"name,omitempty"`
}
