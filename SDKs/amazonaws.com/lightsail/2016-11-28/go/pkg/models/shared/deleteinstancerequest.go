package shared

type DeleteInstanceRequest struct {
	ForceDeleteAddOns *bool  `json:"forceDeleteAddOns,omitempty"`
	InstanceName      string `json:"instanceName"`
}
