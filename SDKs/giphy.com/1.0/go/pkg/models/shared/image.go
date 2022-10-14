package shared

type Image struct {
	Frames   *string `json:"frames,omitempty"`
	Height   *string `json:"height,omitempty"`
	Mp4      *string `json:"mp4,omitempty"`
	Mp4Size  *string `json:"mp4_size,omitempty"`
	Size     *string `json:"size,omitempty"`
	URL      *string `json:"url,omitempty"`
	Webp     *string `json:"webp,omitempty"`
	WebpSize *string `json:"webp_size,omitempty"`
	Width    *string `json:"width,omitempty"`
}
