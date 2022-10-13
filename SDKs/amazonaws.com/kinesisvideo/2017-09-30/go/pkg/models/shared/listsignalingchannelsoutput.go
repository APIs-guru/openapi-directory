package shared

type ListSignalingChannelsOutput struct {
	ChannelInfoList []ChannelInfo `json:"ChannelInfoList"`
	NextToken       *string       `json:"NextToken"`
}
