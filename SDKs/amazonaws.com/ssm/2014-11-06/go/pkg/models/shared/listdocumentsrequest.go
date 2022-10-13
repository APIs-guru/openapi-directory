package shared

type ListDocumentsRequest struct {
	DocumentFilterList []DocumentFilter          `json:"DocumentFilterList"`
	Filters            []DocumentKeyValuesFilter `json:"Filters"`
	MaxResults         *int64                    `json:"MaxResults"`
	NextToken          *string                   `json:"NextToken"`
}
