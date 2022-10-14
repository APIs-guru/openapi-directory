package operations

type StatusRequestBody struct {
	Endpoint string `json:"endpoint"`
}

type StatusRequest struct {
	Request *StatusRequestBody `request:"mediaType=application/json"`
}

type Status200ApplicationJSONLastHandshake struct {
	Agent                    *string `json:"agent,omitempty"`
	ChainID                  *string `json:"chain_id,omitempty"`
	Generation               *int64  `json:"generation,omitempty"`
	HeadID                   *string `json:"head_id,omitempty"`
	HeadNum                  *int64  `json:"head_num,omitempty"`
	Key                      *string `json:"key,omitempty"`
	LastIrreversibleBlockID  *string `json:"last_irreversible_block_id,omitempty"`
	LastIrreversibleBlockNum *int64  `json:"last_irreversible_block_num,omitempty"`
	NetworkVersion           *int64  `json:"network_version,omitempty"`
	NodeID                   *string `json:"node_id,omitempty"`
	Os                       *string `json:"os,omitempty"`
	P2pAddress               *string `json:"p2p_address,omitempty"`
	Sig                      *string `json:"sig,omitempty"`
	Time                     *string `json:"time,omitempty"`
	Token                    *string `json:"token,omitempty"`
}

type Status200ApplicationJSON struct {
	Connecting    *bool                                  `json:"connecting,omitempty"`
	LastHandshake *Status200ApplicationJSONLastHandshake `json:"last_handshake,omitempty"`
	Peer          *string                                `json:"peer,omitempty"`
	Syncing       *bool                                  `json:"syncing,omitempty"`
}

type StatusResponse struct {
	ContentType                    string
	StatusCode                     int64
	Status200ApplicationJSONObject *Status200ApplicationJSON
}
