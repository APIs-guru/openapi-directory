package shared

// MinimumEngineVersionPerAllowedValue
// The minimum DB engine version required for each corresponding allowed value for an option setting.
type MinimumEngineVersionPerAllowedValue struct {
	AllowedValue         *string
	MinimumEngineVersion *string
}
