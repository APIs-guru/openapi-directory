package shared

type ListInventoryEntriesResult struct {
	CaptureTime   *string             `json:"CaptureTime"`
	Entries       []map[string]string `json:"Entries"`
	InstanceID    *string             `json:"InstanceId"`
	NextToken     *string             `json:"NextToken"`
	SchemaVersion *string             `json:"SchemaVersion"`
	TypeName      *string             `json:"TypeName"`
}
