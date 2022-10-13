package shared

type ColumnLfTag struct {
	LfTags []LfTagPair `json:"LFTags"`
	Name   *string     `json:"Name"`
}
