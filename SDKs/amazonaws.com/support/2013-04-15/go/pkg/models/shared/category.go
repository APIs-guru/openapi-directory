package shared

// Category
// A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service.
type Category struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}
