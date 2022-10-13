package shared

type CreateInstancesFromSnapshotRequest struct {
	AddOns                          []AddOnRequest       `json:"addOns"`
	AttachedDiskMapping             map[string][]DiskMap `json:"attachedDiskMapping"`
	AvailabilityZone                string               `json:"availabilityZone"`
	BundleID                        string               `json:"bundleId"`
	InstanceNames                   []string             `json:"instanceNames"`
	InstanceSnapshotName            *string              `json:"instanceSnapshotName"`
	IPAddressType                   *IPAddressTypeEnum   `json:"ipAddressType"`
	KeyPairName                     *string              `json:"keyPairName"`
	RestoreDate                     *string              `json:"restoreDate"`
	SourceInstanceName              *string              `json:"sourceInstanceName"`
	Tags                            []Tag                `json:"tags"`
	UseLatestRestorableAutoSnapshot *bool                `json:"useLatestRestorableAutoSnapshot"`
	UserData                        *string              `json:"userData"`
}
