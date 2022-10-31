package shared

type RoleAssignments struct {
	Etag          *string          `json:"etag,omitempty"`
	Items         []RoleAssignment `json:"items,omitempty"`
	Kind          *string          `json:"kind,omitempty"`
	NextPageToken *string          `json:"nextPageToken,omitempty"`
}
