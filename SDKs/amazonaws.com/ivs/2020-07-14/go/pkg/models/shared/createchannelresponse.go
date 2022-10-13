package shared

type CreateChannelResponse struct {
	Channel   *Channel   `json:"channel"`
	StreamKey *StreamKey `json:"streamKey"`
}
