package shared

type ContextPhoto struct {
	Farm    *string `json:"farm"`
	ID      *string `json:"id"`
	IsFaved *bool   `json:"is_faved"`
	License *int64  `json:"license"`
	Media   *string `json:"media"`
	Owner   *string `json:"owner"`
	Safe    *bool   `json:"safe"`
	Secret  *string `json:"secret"`
	Server  *string `json:"server"`
	Thumb   *string `json:"thumb"`
	Title   *string `json:"title"`
	URL     *string `json:"url"`
}
