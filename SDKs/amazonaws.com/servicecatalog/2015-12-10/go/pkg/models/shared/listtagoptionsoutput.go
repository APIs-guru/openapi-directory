package shared

type ListTagOptionsOutput struct {
	PageToken        *string           `json:"PageToken,omitempty"`
	TagOptionDetails []TagOptionDetail `json:"TagOptionDetails,omitempty"`
}
