package shared

type DetailScopeEnum string

const (
	DetailScopeEnumParameter DetailScopeEnum = "Parameter"
	DetailScopeEnumReport    DetailScopeEnum = "Report"
	DetailScopeEnumItem      DetailScopeEnum = "Item"
)

type Detail struct {
	Detail *string          `json:"detail,omitempty"`
	ID     *string          `json:"id,omitempty"`
	Scope  *DetailScopeEnum `json:"scope,omitempty"`
}
