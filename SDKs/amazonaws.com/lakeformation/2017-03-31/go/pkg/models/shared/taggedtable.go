package shared

type TaggedTable struct {
	LfTagOnDatabase []LfTagPair    `json:"LFTagOnDatabase"`
	LfTagsOnColumns []ColumnLfTag  `json:"LFTagsOnColumns"`
	LfTagsOnTable   []LfTagPair    `json:"LFTagsOnTable"`
	Table           *TableResource `json:"Table"`
}
