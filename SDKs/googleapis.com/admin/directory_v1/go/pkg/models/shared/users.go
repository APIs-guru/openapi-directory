package shared

type Users struct {
	Etag          *string `json:"etag,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	TriggerEvent  *string `json:"trigger_event,omitempty"`
	Users         []User  `json:"users,omitempty"`
}
