package shared

// VideoContent
// Video content for a creative.
type VideoContent struct {
	VideoURL     *string `json:"videoUrl,omitempty"`
	VideoVastXML *string `json:"videoVastXml,omitempty"`
}
