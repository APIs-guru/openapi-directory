package shared

type ServiceLimit struct {
	IsServiceLimited *bool     `json:"isServiceLimited"`
	Unit             *UnitEnum `json:"unit"`
	Value            *int64    `json:"value"`
}
