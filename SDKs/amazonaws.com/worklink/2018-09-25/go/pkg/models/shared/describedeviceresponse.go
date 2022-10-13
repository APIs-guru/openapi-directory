package shared

import (
	"time"
)

type DescribeDeviceResponse struct {
	FirstAccessedTime      *time.Time        `json:"FirstAccessedTime"`
	LastAccessedTime       *time.Time        `json:"LastAccessedTime"`
	Manufacturer           *string           `json:"Manufacturer"`
	Model                  *string           `json:"Model"`
	OperatingSystem        *string           `json:"OperatingSystem"`
	OperatingSystemVersion *string           `json:"OperatingSystemVersion"`
	PatchLevel             *string           `json:"PatchLevel"`
	Status                 *DeviceStatusEnum `json:"Status"`
	Username               *string           `json:"Username"`
}
