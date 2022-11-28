package shared

// Disk
// The disk identifier.
type Disk struct {
	Bytes      *int64  `json:"bytes,omitempty"`
	DeviceName *string `json:"deviceName,omitempty"`
}
