package shared

import (
	"time"
)

type ChannelInfo struct {
	ChannelArn                *string                    `json:"ChannelARN"`
	ChannelName               *string                    `json:"ChannelName"`
	ChannelStatus             *StatusEnum                `json:"ChannelStatus"`
	ChannelType               *ChannelTypeEnum           `json:"ChannelType"`
	CreationTime              *time.Time                 `json:"CreationTime"`
	SingleMasterConfiguration *SingleMasterConfiguration `json:"SingleMasterConfiguration"`
	Version                   *string                    `json:"Version"`
}
