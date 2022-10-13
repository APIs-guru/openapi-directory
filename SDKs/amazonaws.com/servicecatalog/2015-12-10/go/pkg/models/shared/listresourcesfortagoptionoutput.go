package shared

type ListResourcesForTagOptionOutput struct {
	PageToken       *string          `json:"PageToken"`
	ResourceDetails []ResourceDetail `json:"ResourceDetails"`
}
