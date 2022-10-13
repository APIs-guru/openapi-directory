package shared

type AuditCategoryPage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []AuditCategory `json:"results"`
}
