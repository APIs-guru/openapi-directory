package shared

// DocumentFilter
// This data type is deprecated. Instead, use <a>DocumentKeyValuesFilter</a>.
type DocumentFilter struct {
	Key   DocumentFilterKeyEnum `json:"key"`
	Value string                `json:"value"`
}
