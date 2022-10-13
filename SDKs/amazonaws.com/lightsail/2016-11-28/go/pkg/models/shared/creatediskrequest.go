package shared

type CreateDiskRequest struct {
	AddOns           []AddOnRequest `json:"addOns"`
	AvailabilityZone string         `json:"availabilityZone"`
	DiskName         string         `json:"diskName"`
	SizeInGb         int64          `json:"sizeInGb"`
	Tags             []Tag          `json:"tags"`
}
