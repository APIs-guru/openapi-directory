package shared

type AuditCasePage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []AuditCase `json:"results"`
}
