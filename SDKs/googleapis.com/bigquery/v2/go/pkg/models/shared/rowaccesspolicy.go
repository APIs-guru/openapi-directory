package shared

// RowAccessPolicy
// Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
type RowAccessPolicy struct {
	CreationTime             *string                   `json:"creationTime,omitempty"`
	Etag                     *string                   `json:"etag,omitempty"`
	FilterPredicate          *string                   `json:"filterPredicate,omitempty"`
	LastModifiedTime         *string                   `json:"lastModifiedTime,omitempty"`
	RowAccessPolicyReference *RowAccessPolicyReference `json:"rowAccessPolicyReference,omitempty"`
}
