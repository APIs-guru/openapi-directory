package shared

type ApplicationsListResponse struct {
	Applications  []Application `json:"applications"`
	Etag          *string       `json:"etag"`
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
}
