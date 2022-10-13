package shared

type SectionTaskInsertRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Task         string  `json:"task"`
}
