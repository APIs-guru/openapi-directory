package shared

type ReplaceServicePerimetersRequest struct {
	Etag              *string            `json:"etag"`
	ServicePerimeters []ServicePerimeter `json:"servicePerimeters"`
}
