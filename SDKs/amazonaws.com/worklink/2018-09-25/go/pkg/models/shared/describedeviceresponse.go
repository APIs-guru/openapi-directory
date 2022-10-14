package shared

import (
	"time"
)

type DescribeDeviceResponse struct {
	FirstAccessedTime      *time.Time        `json:"FirstAccessedTime,omitempty"`
	LastAccessedTime       *time.Time        `json:"LastAccessedTime,omitempty"`
	Manufacturer           *string           `json:"Manufacturer,omitempty"`
	Model                  *string           `json:"Model,omitempty"`
	OperatingSystem        *string           `json:"OperatingSystem,omitempty"`
	OperatingSystemVersion *string           `json:"OperatingSystemVersion,omitempty"`
	PatchLevel             *string           `json:"PatchLevel,omitempty"`
	Status                 *DeviceStatusEnum `json:"Status,omitempty"`
	Username               *string           `json:"Username,omitempty"`
}
