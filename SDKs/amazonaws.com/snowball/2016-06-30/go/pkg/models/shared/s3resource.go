package shared



type S3Resource struct {
    BucketArn *string `json:"BucketArn,omitempty"`
    KeyRange *KeyRange `json:"KeyRange,omitempty"`
    TargetOnDeviceServices []TargetOnDeviceService `json:"TargetOnDeviceServices,omitempty"`
    
}

