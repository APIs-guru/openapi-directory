package shared

type EventsResponse struct {
	Results map[string]ItemResponse `json:"Results"`
}
