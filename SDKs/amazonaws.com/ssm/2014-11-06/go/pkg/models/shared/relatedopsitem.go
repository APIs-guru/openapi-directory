package shared

// RelatedOpsItem
// An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
type RelatedOpsItem struct {
	OpsItemID string `json:"OpsItemId"`
}
