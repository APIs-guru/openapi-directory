package shared

type TaskSetParentRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Parent       string  `json:"parent"`
}
