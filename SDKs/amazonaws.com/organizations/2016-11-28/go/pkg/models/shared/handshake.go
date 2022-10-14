package shared

import (
	"time"
)

type Handshake struct {
	Action              *ActionTypeEnum     `json:"Action,omitempty"`
	Arn                 *string             `json:"Arn,omitempty"`
	ExpirationTimestamp *time.Time          `json:"ExpirationTimestamp,omitempty"`
	ID                  *string             `json:"Id,omitempty"`
	Parties             []HandshakeParty    `json:"Parties,omitempty"`
	RequestedTimestamp  *time.Time          `json:"RequestedTimestamp,omitempty"`
	Resources           []HandshakeResource `json:"Resources,omitempty"`
	State               *HandshakeStateEnum `json:"State,omitempty"`
}
