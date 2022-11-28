package shared

// DocumentList
// Documents List
type DocumentList struct {
	Documents []map[string]interface{} `json:"documents"`
	Sum       int32                    `json:"sum"`
}
