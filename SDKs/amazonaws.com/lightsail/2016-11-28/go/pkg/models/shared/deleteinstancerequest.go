package shared

type DeleteInstanceRequest struct {
	ForceDeleteAddOns *bool  `json:"forceDeleteAddOns"`
	InstanceName      string `json:"instanceName"`
}
