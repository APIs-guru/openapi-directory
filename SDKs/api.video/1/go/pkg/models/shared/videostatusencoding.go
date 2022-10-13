package shared

type VideostatusEncoding struct {
	Metadata  *VideostatusEncodingMetadata `json:"metadata"`
	Playable  *bool                        `json:"playable"`
	Qualities []Quality                    `json:"qualities"`
}
