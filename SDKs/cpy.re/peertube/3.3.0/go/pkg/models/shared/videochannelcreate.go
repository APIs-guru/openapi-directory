package shared

type VideoChannelCreateInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName string  `json:"displayName"`
	Name        string  `json:"name"`
	Support     *string `json:"support,omitempty"`
}
