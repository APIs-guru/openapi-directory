package shared

type SectionRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Name         string  `json:"name"`
	Project      string  `json:"project"`
}
