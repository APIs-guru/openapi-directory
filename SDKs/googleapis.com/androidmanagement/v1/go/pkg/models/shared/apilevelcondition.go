package shared

// APILevelCondition
// A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
type APILevelCondition struct {
	MinAPILevel *int32 `json:"minApiLevel,omitempty"`
}
