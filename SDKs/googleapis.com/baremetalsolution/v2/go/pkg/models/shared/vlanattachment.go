package shared

type VlanAttachment struct {
	ID         *string    `json:"id"`
	PairingKey *string    `json:"pairingKey"`
	PeerIP     *string    `json:"peerIp"`
	PeerVlanID *string    `json:"peerVlanId"`
	QosPolicy  *QosPolicy `json:"qosPolicy"`
	RouterIP   *string    `json:"routerIp"`
}
