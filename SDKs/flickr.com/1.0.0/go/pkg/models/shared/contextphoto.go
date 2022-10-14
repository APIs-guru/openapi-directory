package shared

type ContextPhoto struct {
	Farm    *string `json:"farm,omitempty"`
	ID      *string `json:"id,omitempty"`
	IsFaved *bool   `json:"is_faved,omitempty"`
	License *int64  `json:"license,omitempty"`
	Media   *string `json:"media,omitempty"`
	Owner   *string `json:"owner,omitempty"`
	Safe    *bool   `json:"safe,omitempty"`
	Secret  *string `json:"secret,omitempty"`
	Server  *string `json:"server,omitempty"`
	Thumb   *string `json:"thumb,omitempty"`
	Title   *string `json:"title,omitempty"`
	URL     *string `json:"url,omitempty"`
}
