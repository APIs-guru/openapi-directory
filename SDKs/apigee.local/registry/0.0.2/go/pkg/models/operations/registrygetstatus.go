package operations

type RegistryGetStatusResponse struct {
	ContentType string
	Status      *interface{}
	StatusCode  int64
}
