package shared

type GetResourceLfTagsResponse struct {
	LfTagOnDatabase []LfTagPair   `json:"LFTagOnDatabase,omitempty"`
	LfTagsOnColumns []ColumnLfTag `json:"LFTagsOnColumns,omitempty"`
	LfTagsOnTable   []LfTagPair   `json:"LFTagsOnTable,omitempty"`
}
