package shared

type ListStreamsOutput struct {
	NextToken      *string      `json:"NextToken"`
	StreamInfoList []StreamInfo `json:"StreamInfoList"`
}
