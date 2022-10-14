package shared

type VideostatusEncoding struct {
	Metadata  *VideostatusEncodingMetadata `json:"metadata,omitempty"`
	Playable  *bool                        `json:"playable,omitempty"`
	Qualities []Quality                    `json:"qualities,omitempty"`
}
