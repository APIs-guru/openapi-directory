package shared

type ListStreamsOutput struct {
	NextToken      *string      `json:"NextToken,omitempty"`
	StreamInfoList []StreamInfo `json:"StreamInfoList,omitempty"`
}
