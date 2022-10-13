package shared

type Image struct {
	ID     *string `json:"id"`
	Sha1   *string `json:"sha1"`
	Sha256 *string `json:"sha256"`
	URL    *string `json:"url"`
}
