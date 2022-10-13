package shared

type FormTableDefinition struct {
	ColumnDefinitions         []FormTableColumnDefinition `json:"ColumnDefinitions"`
	TableID                   *string                     `json:"TableID"`
	TargetRowHeightRelative   *float64                    `json:"TargetRowHeight_Relative"`
	TargetTableHeightRelative *float64                    `json:"TargetTableHeight_Relative"`
}
