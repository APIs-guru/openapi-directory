package shared

type VideoChannelUpdateInput struct {
	BulkVideosSupportUpdate *bool   `json:"bulkVideosSupportUpdate,omitempty"`
	Description             *string `json:"description,omitempty"`
	DisplayName             *string `json:"displayName,omitempty"`
	Support                 *string `json:"support,omitempty"`
}
