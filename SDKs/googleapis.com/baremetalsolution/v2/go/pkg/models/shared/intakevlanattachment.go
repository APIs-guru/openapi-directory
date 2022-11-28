package shared

// IntakeVlanAttachment
// A GCP vlan attachment.
type IntakeVlanAttachment struct {
	ID         *string `json:"id,omitempty"`
	PairingKey *string `json:"pairingKey,omitempty"`
}
