package shared

type S3Resource struct {
	BucketArn              *string                 `json:"BucketArn"`
	KeyRange               *KeyRange               `json:"KeyRange"`
	TargetOnDeviceServices []TargetOnDeviceService `json:"TargetOnDeviceServices"`
}
