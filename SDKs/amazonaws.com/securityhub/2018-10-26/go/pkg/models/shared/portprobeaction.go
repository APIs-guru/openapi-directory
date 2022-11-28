package shared

// PortProbeAction
// Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
type PortProbeAction struct {
	Blocked          *bool             `json:"Blocked,omitempty"`
	PortProbeDetails []PortProbeDetail `json:"PortProbeDetails,omitempty"`
}
