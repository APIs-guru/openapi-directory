package shared

type TaskAddProjectRequest struct {
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	Project      string  `json:"project"`
	Section      *string `json:"section"`
}
