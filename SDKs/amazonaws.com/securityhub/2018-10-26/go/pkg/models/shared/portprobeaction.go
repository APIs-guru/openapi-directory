package shared

type PortProbeAction struct {
	Blocked          *bool             `json:"Blocked,omitempty"`
	PortProbeDetails []PortProbeDetail `json:"PortProbeDetails,omitempty"`
}
