package shared

// S3Resource
// Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted.
type S3Resource struct {
	BucketArn              *string                 `json:"BucketArn,omitempty"`
	KeyRange               *KeyRange               `json:"KeyRange,omitempty"`
	TargetOnDeviceServices []TargetOnDeviceService `json:"TargetOnDeviceServices,omitempty"`
}
