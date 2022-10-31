package shared

type GetInventorySchemaRequest struct {
	Aggregator *bool   `json:"Aggregator,omitempty"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	SubType    *bool   `json:"SubType,omitempty"`
	TypeName   *string `json:"TypeName,omitempty"`
}
