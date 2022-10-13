package shared

type Location struct {
	DisplayName *string                `json:"displayName"`
	Labels      map[string]string      `json:"labels"`
	LocationID  *string                `json:"locationId"`
	Metadata    map[string]interface{} `json:"metadata"`
	Name        *string                `json:"name"`
}
