package shared

type NetworkAddress struct {
	Address           *string `json:"address"`
	ExistingNetworkID *string `json:"existingNetworkId"`
	NetworkID         *string `json:"networkId"`
}
