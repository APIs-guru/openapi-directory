package shared



type TargetingValue struct {
    CreativeSizeValue *CreativeSize `json:"creativeSizeValue,omitempty"`
    DayPartTargetingValue *DayPartTargeting `json:"dayPartTargetingValue,omitempty"`
    LongValue *string `json:"longValue,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

