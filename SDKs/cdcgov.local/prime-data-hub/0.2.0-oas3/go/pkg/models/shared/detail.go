package shared

type DetailScopeEnum string

const (
	DetailScopeEnumParameter DetailScopeEnum = "Parameter"
	DetailScopeEnumReport    DetailScopeEnum = "Report"
	DetailScopeEnumItem      DetailScopeEnum = "Item"
)

type Detail struct {
	Detail *string          `json:"detail"`
	ID     *string          `json:"id"`
	Scope  *DetailScopeEnum `json:"scope"`
}
