package shared

type RegisterInstanceRequest struct {
	Hostname                *string           `json:"Hostname"`
	InstanceIdentity        *InstanceIdentity `json:"InstanceIdentity"`
	PrivateIP               *string           `json:"PrivateIp"`
	PublicIP                *string           `json:"PublicIp"`
	RsaPublicKey            *string           `json:"RsaPublicKey"`
	RsaPublicKeyFingerprint *string           `json:"RsaPublicKeyFingerprint"`
	StackID                 string            `json:"StackId"`
}
