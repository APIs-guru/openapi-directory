package shared

// CommitServicePerimetersRequest
// A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
type CommitServicePerimetersRequest struct {
	Etag *string `json:"etag,omitempty"`
}
