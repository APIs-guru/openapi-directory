package shared

// Intent
// Identifies the specific version of an intent.
type Intent struct {
	IntentName    string `json:"intentName"`
	IntentVersion string `json:"intentVersion"`
}
