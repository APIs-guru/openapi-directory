package shared

type ListStreamingImagesResponse struct {
	NextToken       *string          `json:"nextToken"`
	StreamingImages []StreamingImage `json:"streamingImages"`
}
