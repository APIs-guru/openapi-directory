package shared

type PortProbeAction struct {
	Blocked          *bool             `json:"Blocked"`
	PortProbeDetails []PortProbeDetail `json:"PortProbeDetails"`
}
