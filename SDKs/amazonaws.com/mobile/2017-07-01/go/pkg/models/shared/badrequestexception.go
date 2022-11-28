package shared

// BadRequestException
//
//	The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed.
type BadRequestException struct {
	Message *string `json:"message,omitempty"`
}
