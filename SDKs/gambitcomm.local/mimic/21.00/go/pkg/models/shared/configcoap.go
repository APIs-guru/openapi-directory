package shared

type ConfigCoap struct {
	Keystore    *string `json:"keystore"`
	PrimaryPort *int32  `json:"primary_port"`
	Rule        *string `json:"rule"`
	SecurePort  *int32  `json:"secure_port"`
}
