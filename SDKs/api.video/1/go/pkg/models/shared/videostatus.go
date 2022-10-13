package shared

type Videostatus struct {
	Encoding *VideostatusEncoding `json:"encoding"`
	Ingest   *VideostatusIngest   `json:"ingest"`
}
