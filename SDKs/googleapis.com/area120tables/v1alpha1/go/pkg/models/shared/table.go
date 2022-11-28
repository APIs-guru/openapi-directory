package shared

// Table
// A single table. NextId: 8
type Table struct {
	Columns     []ColumnDescription `json:"columns,omitempty"`
	CreateTime  *string             `json:"createTime,omitempty"`
	DisplayName *string             `json:"displayName,omitempty"`
	Name        *string             `json:"name,omitempty"`
	SavedViews  []SavedView         `json:"savedViews,omitempty"`
	TimeZone    *string             `json:"timeZone,omitempty"`
	UpdateTime  *string             `json:"updateTime,omitempty"`
}
