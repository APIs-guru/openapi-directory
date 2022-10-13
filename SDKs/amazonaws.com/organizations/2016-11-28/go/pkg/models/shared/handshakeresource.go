package shared

type HandshakeResource struct {
	Resources []HandshakeResource        `json:"Resources"`
	Type      *HandshakeResourceTypeEnum `json:"Type"`
	Value     *string                    `json:"Value"`
}
