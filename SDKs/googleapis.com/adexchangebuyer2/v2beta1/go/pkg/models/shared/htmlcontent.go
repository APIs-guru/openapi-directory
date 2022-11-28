package shared

// HTMLContent
// HTML content for a creative.
type HTMLContent struct {
	Height  *int32  `json:"height,omitempty"`
	Snippet *string `json:"snippet,omitempty"`
	Width   *int32  `json:"width,omitempty"`
}
