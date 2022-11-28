package shared

// BehaviorEntity
// List Behaviors
type BehaviorEntity struct {
	AttachmentURL *string                `json:"attachment_url,omitempty"`
	Behavior      *string                `json:"behavior,omitempty"`
	ID            *int32                 `json:"id,omitempty"`
	Path          *string                `json:"path,omitempty"`
	Value         map[string]interface{} `json:"value,omitempty"`
}
