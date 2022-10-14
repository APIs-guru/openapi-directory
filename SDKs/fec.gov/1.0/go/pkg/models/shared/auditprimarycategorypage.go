package shared

type AuditPrimaryCategoryPage struct {
	Pagination *OffsetInfo            `json:"pagination,omitempty"`
	Results    []AuditPrimaryCategory `json:"results,omitempty"`
}
