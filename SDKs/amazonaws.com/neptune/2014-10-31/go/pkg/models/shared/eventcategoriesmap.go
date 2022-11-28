package shared

// EventCategoriesMap
// Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
type EventCategoriesMap struct {
	EventCategories []string
	SourceType      *string
}
