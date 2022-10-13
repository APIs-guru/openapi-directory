package shared

type GetInventorySchemaRequest struct {
	Aggregator *bool   `json:"Aggregator"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	SubType    *bool   `json:"SubType"`
	TypeName   *string `json:"TypeName"`
}
