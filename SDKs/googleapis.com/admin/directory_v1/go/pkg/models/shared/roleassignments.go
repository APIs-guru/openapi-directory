package shared

type RoleAssignments struct {
	Etag          *string          `json:"etag"`
	Items         []RoleAssignment `json:"items"`
	Kind          *string          `json:"kind"`
	NextPageToken *string          `json:"nextPageToken"`
}
