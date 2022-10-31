package shared



type ListSignalingChannelsOutput struct {
    ChannelInfoList []ChannelInfo `json:"ChannelInfoList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

