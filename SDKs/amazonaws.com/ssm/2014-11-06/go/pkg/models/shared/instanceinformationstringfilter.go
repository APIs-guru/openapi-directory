package shared

// InstanceInformationStringFilter
// The filters to describe or get information about your managed instances.
type InstanceInformationStringFilter struct {
	Key    string   `json:"Key"`
	Values []string `json:"Values"`
}
