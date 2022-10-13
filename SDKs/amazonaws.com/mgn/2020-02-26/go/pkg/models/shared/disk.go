package shared

type Disk struct {
	Bytes      *int64  `json:"bytes"`
	DeviceName *string `json:"deviceName"`
}
