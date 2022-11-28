package shared

// V2ListKeysResponse
// Response message for `ListKeys` method.
type V2ListKeysResponse struct {
	Keys          []V2Key `json:"keys,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
