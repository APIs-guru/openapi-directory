package shared

// ActionLocalPortDetails
// For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action.
type ActionLocalPortDetails struct {
	Port     *int64  `json:"Port,omitempty"`
	PortName *string `json:"PortName,omitempty"`
}
