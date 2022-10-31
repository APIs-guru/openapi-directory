package shared

type CompaniesSortByEnum string

const (
	CompaniesSortByEnumCreatedAt CompaniesSortByEnum = "created_at"
	CompaniesSortByEnumUpdatedAt CompaniesSortByEnum = "updated_at"
	CompaniesSortByEnumName      CompaniesSortByEnum = "name"
)

type CompaniesSort struct {
	By        *CompaniesSortByEnum `queryParam:"name=by"`
	Direction *SortDirectionEnum   `queryParam:"name=direction"`
}
