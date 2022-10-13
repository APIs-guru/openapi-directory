package shared

type Columns struct {
	AttributeNames []string `json:"attributeNames"`
	Etag           *string  `json:"etag"`
	Items          []Column `json:"items"`
	Kind           *string  `json:"kind"`
	TotalResults   *int32   `json:"totalResults"`
}
