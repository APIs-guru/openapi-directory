package shared

// Barrier
// Barrier runnable blocks until all tasks in a taskgroup reach it.
type Barrier struct {
	Name *string `json:"name,omitempty"`
}
