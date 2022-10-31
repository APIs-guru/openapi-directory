package shared

type NetworkAddress struct {
	Address           *string `json:"address,omitempty"`
	ExistingNetworkID *string `json:"existingNetworkId,omitempty"`
	NetworkID         *string `json:"networkId,omitempty"`
}
