package shared

type InstanceInformationFilter struct {
	Key      InstanceInformationFilterKeyEnum `json:"key"`
	ValueSet []string                         `json:"valueSet"`
}
