package shared

type ListImagesResponse struct {
	Images    []Image `json:"Images"`
	NextToken *string `json:"NextToken"`
}
