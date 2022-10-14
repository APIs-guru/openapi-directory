package shared

type V2ListKeysResponse struct {
	Keys          []V2Key `json:"keys,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
