package shared

// SupportedConfiguration
// An array that defines the configuration supported by this template. This includes specified properties and usage (whether the property is REQUIRED or OPTIONAL), and an optional default value.
type SupportedConfiguration struct {
	DefaultValue *string `json:"defaultValue,omitempty"`
	Property     *string `json:"property,omitempty"`
	Usage        *string `json:"usage,omitempty"`
}
