package shared

type TableDataList struct {
	Etag      *string    `json:"etag"`
	Kind      *string    `json:"kind"`
	PageToken *string    `json:"pageToken"`
	Rows      []TableRow `json:"rows"`
	TotalRows *string    `json:"totalRows"`
}
