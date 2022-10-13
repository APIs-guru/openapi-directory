package shared

type Report struct {
	ColumnHeader  *ColumnHeader `json:"columnHeader"`
	Data          *ReportData   `json:"data"`
	NextPageToken *string       `json:"nextPageToken"`
}
