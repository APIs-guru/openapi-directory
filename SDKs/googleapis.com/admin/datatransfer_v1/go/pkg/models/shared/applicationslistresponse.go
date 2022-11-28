package shared

// ApplicationsListResponse
// Template for a collection of Applications.
type ApplicationsListResponse struct {
	Applications  []Application `json:"applications,omitempty"`
	Etag          *string       `json:"etag,omitempty"`
	Kind          *string       `json:"kind,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
