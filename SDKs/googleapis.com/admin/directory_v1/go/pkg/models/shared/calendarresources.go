package shared

type CalendarResources struct {
	Etag          *string            `json:"etag"`
	Items         []CalendarResource `json:"items"`
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
}
