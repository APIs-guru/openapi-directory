package shared

type ConfigCoap struct {
	Keystore    *string `json:"keystore,omitempty"`
	PrimaryPort *int32  `json:"primary_port,omitempty"`
	Rule        *string `json:"rule,omitempty"`
	SecurePort  *int32  `json:"secure_port,omitempty"`
}
