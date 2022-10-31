package shared



type AuditCasePage struct {
    Pagination *OffsetInfo `json:"pagination,omitempty"`
    Results []AuditCase `json:"results,omitempty"`
    
}

