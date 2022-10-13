package shared

type ConfigIpmi struct {
	PrimaryPort *int32  `json:"primary_port"`
	SecurePort  *int32  `json:"secure_port"`
	Version     *string `json:"version"`
}
