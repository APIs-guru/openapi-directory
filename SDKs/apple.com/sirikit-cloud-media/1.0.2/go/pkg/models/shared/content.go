package shared

type Content struct {
	Attributes *ContentAttributes `json:"attributes,omitempty"`
	Control    *string            `json:"control,omitempty"`
	Identifier string             `json:"identifier"`
	IsLive     *bool              `json:"isLive,omitempty"`
	PlayIndex  *int64             `json:"playIndex,omitempty"`
	URL        *string            `json:"url,omitempty"`
}
