package shared

type ListTagOptionsOutput struct {
	PageToken        *string           `json:"PageToken"`
	TagOptionDetails []TagOptionDetail `json:"TagOptionDetails"`
}
