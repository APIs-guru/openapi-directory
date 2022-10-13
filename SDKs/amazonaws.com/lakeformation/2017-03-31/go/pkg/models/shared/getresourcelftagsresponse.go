package shared

type GetResourceLfTagsResponse struct {
	LfTagOnDatabase []LfTagPair   `json:"LFTagOnDatabase"`
	LfTagsOnColumns []ColumnLfTag `json:"LFTagsOnColumns"`
	LfTagsOnTable   []LfTagPair   `json:"LFTagsOnTable"`
}
