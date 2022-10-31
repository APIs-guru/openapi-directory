package shared

type RequestEntity struct {
	AutomationID    *string `json:"automation_id,omitempty"`
	Destination     *string `json:"destination,omitempty"`
	ID              *int32  `json:"id,omitempty"`
	Path            *string `json:"path,omitempty"`
	Source          *string `json:"source,omitempty"`
	UserDisplayName *string `json:"user_display_name,omitempty"`
}
