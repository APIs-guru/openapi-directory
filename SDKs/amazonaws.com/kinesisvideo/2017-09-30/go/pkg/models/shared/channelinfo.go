package shared

import (
	"time"
)

// ChannelInfo
// A structure that encapsulates a signaling channel's metadata and properties.
type ChannelInfo struct {
	ChannelArn                *string                    `json:"ChannelARN,omitempty"`
	ChannelName               *string                    `json:"ChannelName,omitempty"`
	ChannelStatus             *StatusEnum                `json:"ChannelStatus,omitempty"`
	ChannelType               *ChannelTypeEnum           `json:"ChannelType,omitempty"`
	CreationTime              *time.Time                 `json:"CreationTime,omitempty"`
	SingleMasterConfiguration *SingleMasterConfiguration `json:"SingleMasterConfiguration,omitempty"`
	Version                   *string                    `json:"Version,omitempty"`
}
