package shared

type InstanceState struct {
	Code *int64                 `json:"code"`
	Name *InstanceStateNameEnum `json:"name"`
}
