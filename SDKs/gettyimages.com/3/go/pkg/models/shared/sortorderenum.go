package shared

type SortOrderEnum string

const (
	SortOrderEnumBestMatch   SortOrderEnum = "best_match"
	SortOrderEnumMostPopular SortOrderEnum = "most_popular"
	SortOrderEnumNewest      SortOrderEnum = "newest"
	SortOrderEnumOldest      SortOrderEnum = "oldest"
	SortOrderEnumRandom      SortOrderEnum = "random"
)
