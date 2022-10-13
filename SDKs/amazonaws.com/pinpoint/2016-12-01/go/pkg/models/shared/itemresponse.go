package shared

type ItemResponse struct {
	EndpointItemResponse *EndpointItemResponse        `json:"EndpointItemResponse"`
	EventsItemResponse   map[string]EventItemResponse `json:"EventsItemResponse"`
}
