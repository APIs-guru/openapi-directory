package shared

type EnvironmentVariable struct {
	Key    string `json:"Key"`
	Secure *bool  `json:"Secure,omitempty"`
	Value  string `json:"Value"`
}
