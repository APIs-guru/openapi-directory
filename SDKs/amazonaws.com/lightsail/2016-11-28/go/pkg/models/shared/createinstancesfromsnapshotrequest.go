package shared

type CreateInstancesFromSnapshotRequest struct {
	AddOns                          []AddOnRequest       `json:"addOns,omitempty"`
	AttachedDiskMapping             map[string][]DiskMap `json:"attachedDiskMapping,omitempty"`
	AvailabilityZone                string               `json:"availabilityZone"`
	BundleID                        string               `json:"bundleId"`
	InstanceNames                   []string             `json:"instanceNames"`
	InstanceSnapshotName            *string              `json:"instanceSnapshotName,omitempty"`
	IPAddressType                   *IPAddressTypeEnum   `json:"ipAddressType,omitempty"`
	KeyPairName                     *string              `json:"keyPairName,omitempty"`
	RestoreDate                     *string              `json:"restoreDate,omitempty"`
	SourceInstanceName              *string              `json:"sourceInstanceName,omitempty"`
	Tags                            []Tag                `json:"tags,omitempty"`
	UseLatestRestorableAutoSnapshot *bool                `json:"useLatestRestorableAutoSnapshot,omitempty"`
	UserData                        *string              `json:"userData,omitempty"`
}
