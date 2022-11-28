package shared

// BucketCriteriaAdditionalProperties
// Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
type BucketCriteriaAdditionalProperties struct {
	Eq     []string `json:"eq,omitempty"`
	Gt     *int64   `json:"gt,omitempty"`
	Gte    *int64   `json:"gte,omitempty"`
	Lt     *int64   `json:"lt,omitempty"`
	Lte    *int64   `json:"lte,omitempty"`
	Neq    []string `json:"neq,omitempty"`
	Prefix *string  `json:"prefix,omitempty"`
}
