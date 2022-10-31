package shared



type CreateInstancesRequest struct {
    AddOns []AddOnRequest `json:"addOns,omitempty"`
    AvailabilityZone string `json:"availabilityZone"`
    BlueprintID string `json:"blueprintId"`
    BundleID string `json:"bundleId"`
    CustomImageName *string `json:"customImageName,omitempty"`
    InstanceNames []string `json:"instanceNames"`
    IPAddressType *IPAddressTypeEnum `json:"ipAddressType,omitempty"`
    KeyPairName *string `json:"keyPairName,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    UserData *string `json:"userData,omitempty"`
    
}

