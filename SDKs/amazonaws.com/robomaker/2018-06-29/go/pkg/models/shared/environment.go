package shared

// Environment
// The object that contains the Docker image URI for either your robot or simulation applications.
type Environment struct {
	URI *string `json:"uri,omitempty"`
}
