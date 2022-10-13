package shared

type Image struct {
	Frames   *string `json:"frames"`
	Height   *string `json:"height"`
	Mp4      *string `json:"mp4"`
	Mp4Size  *string `json:"mp4_size"`
	Size     *string `json:"size"`
	URL      *string `json:"url"`
	Webp     *string `json:"webp"`
	WebpSize *string `json:"webp_size"`
	Width    *string `json:"width"`
}
