package shared

// CalendarResources
// Public API: Resources.calendars
type CalendarResources struct {
	Etag          *string            `json:"etag,omitempty"`
	Items         []CalendarResource `json:"items,omitempty"`
	Kind          *string            `json:"kind,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
