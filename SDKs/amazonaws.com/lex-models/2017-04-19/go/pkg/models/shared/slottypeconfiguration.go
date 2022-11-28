package shared

// SlotTypeConfiguration
// Provides configuration information for a slot type.
type SlotTypeConfiguration struct {
	RegexConfiguration *SlotTypeRegexConfiguration `json:"regexConfiguration,omitempty"`
}
