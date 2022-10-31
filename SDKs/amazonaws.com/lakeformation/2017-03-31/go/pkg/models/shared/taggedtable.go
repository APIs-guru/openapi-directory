package shared



type TaggedTable struct {
    LfTagOnDatabase []LfTagPair `json:"LFTagOnDatabase,omitempty"`
    LfTagsOnColumns []ColumnLfTag `json:"LFTagsOnColumns,omitempty"`
    LfTagsOnTable []LfTagPair `json:"LFTagsOnTable,omitempty"`
    Table *TableResource `json:"Table,omitempty"`
    
}

