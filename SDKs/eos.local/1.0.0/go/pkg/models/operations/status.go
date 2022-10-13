package operations

type StatusRequestBody struct {
	Endpoint string `json:"endpoint"`
}

type StatusRequest struct {
	Request *StatusRequestBody `request:"mediaType=application/json"`
}

type Status200ApplicationJSONLastHandshake struct {
	Agent                    *string `json:"agent"`
	ChainID                  *string `json:"chain_id"`
	Generation               *int64  `json:"generation"`
	HeadID                   *string `json:"head_id"`
	HeadNum                  *int64  `json:"head_num"`
	Key                      *string `json:"key"`
	LastIrreversibleBlockID  *string `json:"last_irreversible_block_id"`
	LastIrreversibleBlockNum *int64  `json:"last_irreversible_block_num"`
	NetworkVersion           *int64  `json:"network_version"`
	NodeID                   *string `json:"node_id"`
	Os                       *string `json:"os"`
	P2pAddress               *string `json:"p2p_address"`
	Sig                      *string `json:"sig"`
	Time                     *string `json:"time"`
	Token                    *string `json:"token"`
}

type Status200ApplicationJSON struct {
	Connecting    *bool                                  `json:"connecting"`
	LastHandshake *Status200ApplicationJSONLastHandshake `json:"last_handshake"`
	Peer          *string                                `json:"peer"`
	Syncing       *bool                                  `json:"syncing"`
}

type StatusResponse struct {
	ContentType                    string
	StatusCode                     int64
	Status200ApplicationJSONObject *Status200ApplicationJSON
}
