package shared

type PresidentialByStatePage struct {
	Pagination *OffsetInfo           `json:"pagination"`
	Results    []PresidentialByState `json:"results"`
}
