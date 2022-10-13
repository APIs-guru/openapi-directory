package shared

type Protection struct {
	HealthCheckIds []string `json:"HealthCheckIds"`
	ID             *string  `json:"Id"`
	Name           *string  `json:"Name"`
	ProtectionArn  *string  `json:"ProtectionArn"`
	ResourceArn    *string  `json:"ResourceArn"`
}
