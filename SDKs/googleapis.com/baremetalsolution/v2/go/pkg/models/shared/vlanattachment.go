package shared

type VlanAttachment struct {
	ID         *string    `json:"id,omitempty"`
	PairingKey *string    `json:"pairingKey,omitempty"`
	PeerIP     *string    `json:"peerIp,omitempty"`
	PeerVlanID *string    `json:"peerVlanId,omitempty"`
	QosPolicy  *QosPolicy `json:"qosPolicy,omitempty"`
	RouterIP   *string    `json:"routerIp,omitempty"`
}
