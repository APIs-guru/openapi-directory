package shared

type V2ListKeysResponse struct {
	Keys          []V2Key `json:"keys"`
	NextPageToken *string `json:"nextPageToken"`
}
