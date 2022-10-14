package shared

type WriteRecordsRequest struct {
	CommonAttributes *Record  `json:"CommonAttributes,omitempty"`
	DatabaseName     string   `json:"DatabaseName"`
	Records          []Record `json:"Records"`
	TableName        string   `json:"TableName"`
}
