package shared



type ManagedProperty struct {
    Key *string `json:"key,omitempty"`
    ValueBool *bool `json:"valueBool,omitempty"`
    ValueBundle *ManagedPropertyBundle `json:"valueBundle,omitempty"`
    ValueBundleArray []ManagedPropertyBundle `json:"valueBundleArray,omitempty"`
    ValueInteger *int32 `json:"valueInteger,omitempty"`
    ValueString *string `json:"valueString,omitempty"`
    ValueStringArray []string `json:"valueStringArray,omitempty"`
    
}

