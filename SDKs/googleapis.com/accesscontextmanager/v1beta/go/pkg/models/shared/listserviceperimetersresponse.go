package shared

type ListServicePerimetersResponse struct {
	NextPageToken     *string            `json:"nextPageToken"`
	ServicePerimeters []ServicePerimeter `json:"servicePerimeters"`
}
