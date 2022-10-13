package shared

type ListTableSpecsResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	TableSpecs    []TableSpec `json:"tableSpecs"`
}
