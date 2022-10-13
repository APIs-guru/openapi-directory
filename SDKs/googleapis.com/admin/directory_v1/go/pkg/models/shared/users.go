package shared

type Users struct {
	Etag          *string `json:"etag"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	TriggerEvent  *string `json:"trigger_event"`
	Users         []User  `json:"users"`
}
