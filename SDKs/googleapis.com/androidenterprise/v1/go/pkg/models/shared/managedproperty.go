package shared

// ManagedProperty
// A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.
type ManagedProperty struct {
	Key              *string                 `json:"key,omitempty"`
	ValueBool        *bool                   `json:"valueBool,omitempty"`
	ValueBundle      *ManagedPropertyBundle  `json:"valueBundle,omitempty"`
	ValueBundleArray []ManagedPropertyBundle `json:"valueBundleArray,omitempty"`
	ValueInteger     *int32                  `json:"valueInteger,omitempty"`
	ValueString      *string                 `json:"valueString,omitempty"`
	ValueStringArray []string                `json:"valueStringArray,omitempty"`
}
