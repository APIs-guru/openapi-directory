package shared

type DataTransfersListResponse struct {
	DataTransfers []DataTransfer `json:"dataTransfers"`
	Etag          *string        `json:"etag"`
	Kind          *string        `json:"kind"`
	NextPageToken *string        `json:"nextPageToken"`
}
