package shared

type DeviceSummary struct {
	AssociatedWithJob *string           `json:"associatedWithJob"`
	ManagedDeviceArn  *string           `json:"managedDeviceArn"`
	ManagedDeviceID   *string           `json:"managedDeviceId"`
	Tags              map[string]string `json:"tags"`
}
