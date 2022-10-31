package shared

type ApisFilter struct {
	Status *APIStatusEnum `queryParam:"name=status"`
}
