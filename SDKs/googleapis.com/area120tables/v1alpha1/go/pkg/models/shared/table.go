package shared

type Table struct {
	Columns     []ColumnDescription `json:"columns"`
	CreateTime  *string             `json:"createTime"`
	DisplayName *string             `json:"displayName"`
	Name        *string             `json:"name"`
	SavedViews  []SavedView         `json:"savedViews"`
	TimeZone    *string             `json:"timeZone"`
	UpdateTime  *string             `json:"updateTime"`
}
