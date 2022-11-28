package shared

// Disk
// A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. https://cloud.google.com/compute/docs/disks#pdspecs. https://cloud.google.com/compute/docs/disks#localssds.
type Disk struct {
	DiskInterface *string `json:"diskInterface,omitempty"`
	Image         *string `json:"image,omitempty"`
	SizeGb        *string `json:"sizeGb,omitempty"`
	Snapshot      *string `json:"snapshot,omitempty"`
	Type          *string `json:"type,omitempty"`
}
