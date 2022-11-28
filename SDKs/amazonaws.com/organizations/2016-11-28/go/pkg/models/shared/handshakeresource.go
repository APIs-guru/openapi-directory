package shared

// HandshakeResource
// Contains additional data that is needed to process a handshake.
type HandshakeResource struct {
	Resources []HandshakeResource        `json:"Resources,omitempty"`
	Type      *HandshakeResourceTypeEnum `json:"Type,omitempty"`
	Value     *string                    `json:"Value,omitempty"`
}
