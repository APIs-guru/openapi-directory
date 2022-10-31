package shared

type Image struct {
	ID     *string `json:"id,omitempty"`
	Sha1   *string `json:"sha1,omitempty"`
	Sha256 *string `json:"sha256,omitempty"`
	URL    *string `json:"url,omitempty"`
}
