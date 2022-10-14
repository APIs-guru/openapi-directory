package shared

type RegisterInstanceRequest struct {
	Hostname                *string           `json:"Hostname,omitempty"`
	InstanceIdentity        *InstanceIdentity `json:"InstanceIdentity,omitempty"`
	PrivateIP               *string           `json:"PrivateIp,omitempty"`
	PublicIP                *string           `json:"PublicIp,omitempty"`
	RsaPublicKey            *string           `json:"RsaPublicKey,omitempty"`
	RsaPublicKeyFingerprint *string           `json:"RsaPublicKeyFingerprint,omitempty"`
	StackID                 string            `json:"StackId"`
}
