package shared

import (
	"time"
)

// Handshake
// <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, or <code>DECLINED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>
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
