package shared

type RequestEntity struct {
	AutomationID    *string `json:"automation_id"`
	Destination     *string `json:"destination"`
	ID              *int32  `json:"id"`
	Path            *string `json:"path"`
	Source          *string `json:"source"`
	UserDisplayName *string `json:"user_display_name"`
}
