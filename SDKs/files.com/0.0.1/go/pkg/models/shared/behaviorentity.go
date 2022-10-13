package shared

type BehaviorEntity struct {
	AttachmentURL *string                `json:"attachment_url"`
	Behavior      *string                `json:"behavior"`
	ID            *int32                 `json:"id"`
	Path          *string                `json:"path"`
	Value         map[string]interface{} `json:"value"`
}
