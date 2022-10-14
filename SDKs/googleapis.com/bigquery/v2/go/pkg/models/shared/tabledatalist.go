package shared

type TableDataList struct {
	Etag      *string    `json:"etag,omitempty"`
	Kind      *string    `json:"kind,omitempty"`
	PageToken *string    `json:"pageToken,omitempty"`
	Rows      []TableRow `json:"rows,omitempty"`
	TotalRows *string    `json:"totalRows,omitempty"`
}
