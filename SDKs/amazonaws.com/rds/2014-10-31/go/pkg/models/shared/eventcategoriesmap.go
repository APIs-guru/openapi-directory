package shared

// EventCategoriesMap
// Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.
type EventCategoriesMap struct {
	EventCategories []string
	SourceType      *string
}
