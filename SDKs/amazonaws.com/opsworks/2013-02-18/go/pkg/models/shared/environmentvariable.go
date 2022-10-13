package shared

type EnvironmentVariable struct {
	Key    string `json:"Key"`
	Secure *bool  `json:"Secure"`
	Value  string `json:"Value"`
}
