package shared

type ManagedProperty struct {
	Key              *string                 `json:"key"`
	ValueBool        *bool                   `json:"valueBool"`
	ValueBundle      *ManagedPropertyBundle  `json:"valueBundle"`
	ValueBundleArray []ManagedPropertyBundle `json:"valueBundleArray"`
	ValueInteger     *int32                  `json:"valueInteger"`
	ValueString      *string                 `json:"valueString"`
	ValueStringArray []string                `json:"valueStringArray"`
}
