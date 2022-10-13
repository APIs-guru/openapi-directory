package shared

type CreateInstancesRequest struct {
	AddOns           []AddOnRequest     `json:"addOns"`
	AvailabilityZone string             `json:"availabilityZone"`
	BlueprintID      string             `json:"blueprintId"`
	BundleID         string             `json:"bundleId"`
	CustomImageName  *string            `json:"customImageName"`
	InstanceNames    []string           `json:"instanceNames"`
	IPAddressType    *IPAddressTypeEnum `json:"ipAddressType"`
	KeyPairName      *string            `json:"keyPairName"`
	Tags             []Tag              `json:"tags"`
	UserData         *string            `json:"userData"`
}
