package shared

type ListColumnSpecsResponse struct {
	ColumnSpecs   []ColumnSpec `json:"columnSpecs"`
	NextPageToken *string      `json:"nextPageToken"`
}
