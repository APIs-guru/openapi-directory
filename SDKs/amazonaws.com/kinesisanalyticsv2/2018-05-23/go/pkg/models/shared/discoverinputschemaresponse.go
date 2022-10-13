package shared

type DiscoverInputSchemaResponse struct {
	InputSchema           *SourceSchema `json:"InputSchema"`
	ParsedInputRecords    [][]string    `json:"ParsedInputRecords"`
	ProcessedInputRecords []string      `json:"ProcessedInputRecords"`
	RawInputRecords       []string      `json:"RawInputRecords"`
}
