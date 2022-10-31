package shared

type OpportunitiesSortByEnum string

const (
	OpportunitiesSortByEnumCreatedAt      OpportunitiesSortByEnum = "created_at"
	OpportunitiesSortByEnumUpdatedAt      OpportunitiesSortByEnum = "updated_at"
	OpportunitiesSortByEnumTitle          OpportunitiesSortByEnum = "title"
	OpportunitiesSortByEnumWinProbability OpportunitiesSortByEnum = "win_probability"
	OpportunitiesSortByEnumMonetaryAmount OpportunitiesSortByEnum = "monetary_amount"
	OpportunitiesSortByEnumStatus         OpportunitiesSortByEnum = "status"
)

type OpportunitiesSort struct {
	By        *OpportunitiesSortByEnum `queryParam:"name=by"`
	Direction *SortDirectionEnum       `queryParam:"name=direction"`
}
