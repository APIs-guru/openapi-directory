package shared

type UptimeCheck struct {
	ID     *string `json:"id,omitempty"`
	Name   *string `json:"name,omitempty"`
	Status *string `json:"status,omitempty"`
	URL    *string `json:"url,omitempty"`
}
