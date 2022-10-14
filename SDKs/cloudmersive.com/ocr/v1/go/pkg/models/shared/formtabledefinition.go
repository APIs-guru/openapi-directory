package shared

type FormTableDefinition struct {
	ColumnDefinitions         []FormTableColumnDefinition `json:"ColumnDefinitions,omitempty"`
	TableID                   *string                     `json:"TableID,omitempty"`
	TargetRowHeightRelative   *float64                    `json:"TargetRowHeight_Relative,omitempty"`
	TargetTableHeightRelative *float64                    `json:"TargetTableHeight_Relative,omitempty"`
}
