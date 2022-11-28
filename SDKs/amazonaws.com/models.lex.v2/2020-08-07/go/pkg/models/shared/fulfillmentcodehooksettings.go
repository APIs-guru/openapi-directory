package shared

// FulfillmentCodeHookSettings
// Determines if a Lambda function should be invoked for a specific intent.
type FulfillmentCodeHookSettings struct {
	Enabled bool `json:"enabled"`
}
