package shared

type CompaniesFilter struct {
	Name *string `queryParam:"name=name"`
}
