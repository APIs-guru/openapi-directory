package shared

// EnvironmentVariable
// Represents an app's environment variable.
type EnvironmentVariable struct {
	Key    string `json:"Key"`
	Secure *bool  `json:"Secure,omitempty"`
	Value  string `json:"Value"`
}
