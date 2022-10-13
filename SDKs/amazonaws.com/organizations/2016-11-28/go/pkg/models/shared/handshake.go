package shared

import (
	"time"
)

type Handshake struct {
	Action              *ActionTypeEnum     `json:"Action"`
	Arn                 *string             `json:"Arn"`
	ExpirationTimestamp *time.Time          `json:"ExpirationTimestamp"`
	ID                  *string             `json:"Id"`
	Parties             []HandshakeParty    `json:"Parties"`
	RequestedTimestamp  *time.Time          `json:"RequestedTimestamp"`
	Resources           []HandshakeResource `json:"Resources"`
	State               *HandshakeStateEnum `json:"State"`
}
