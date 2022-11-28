package shared

// ProtocolDetails
// <p> The protocol settings that are configured for your server. </p> <note> <p> This type is only valid in the <code>UpdateServer</code> API. </p> </note>
type ProtocolDetails struct {
	PassiveIP *string `json:"PassiveIp,omitempty"`
}
