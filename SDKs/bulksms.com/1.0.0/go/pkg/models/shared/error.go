package shared

// Error
// See the [errors page](errors/) for more detail on what kind of errors you can get.
type Error struct {
	Detail *string `json:"detail,omitempty"`
	Status int32   `json:"status"`
	Title  string  `json:"title"`
	Type   string  `json:"type"`
}
