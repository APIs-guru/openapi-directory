package shared

// VlanAttachment
// A GCP vlan attachment.
type VlanAttachment struct {
	ID         *string `json:"id,omitempty"`
	PairingKey *string `json:"pairingKey,omitempty"`
}
