package shared

type ListDocumentsRequest struct {
	DocumentFilterList []DocumentFilter          `json:"DocumentFilterList,omitempty"`
	Filters            []DocumentKeyValuesFilter `json:"Filters,omitempty"`
	MaxResults         *int64                    `json:"MaxResults,omitempty"`
	NextToken          *string                   `json:"NextToken,omitempty"`
}
