package shared

type AuditCategoryPage struct {
	Pagination *OffsetInfo     `json:"pagination,omitempty"`
	Results    []AuditCategory `json:"results,omitempty"`
}
