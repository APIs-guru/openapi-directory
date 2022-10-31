package shared

type Route struct {
	Domain *string `json:"domain,omitempty"`
	Host   *string `json:"host,omitempty"`
}
