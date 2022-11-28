package shared

// NotFoundException
//
//	No entity can be found with the specified identifier.
type NotFoundException struct {
	Message *string `json:"message,omitempty"`
}
