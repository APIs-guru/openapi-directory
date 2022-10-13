package shared

type Content struct {
	Attributes *ContentAttributes `json:"attributes"`
	Control    *string            `json:"control"`
	Identifier string             `json:"identifier"`
	IsLive     *bool              `json:"isLive"`
	PlayIndex  *int64             `json:"playIndex"`
	URL        *string            `json:"url"`
}
