package shared

type UptimeCheck struct {
	ID     *string `json:"id"`
	Name   *string `json:"name"`
	Status *string `json:"status"`
	URL    *string `json:"url"`
}
