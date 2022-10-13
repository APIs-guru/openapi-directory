package shared

type AuditPrimaryCategoryPage struct {
	Pagination *OffsetInfo            `json:"pagination"`
	Results    []AuditPrimaryCategory `json:"results"`
}
