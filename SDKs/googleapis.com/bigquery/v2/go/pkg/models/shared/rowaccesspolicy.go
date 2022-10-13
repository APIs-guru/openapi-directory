package shared

type RowAccessPolicy struct {
	CreationTime             *string                   `json:"creationTime"`
	Etag                     *string                   `json:"etag"`
	FilterPredicate          *string                   `json:"filterPredicate"`
	LastModifiedTime         *string                   `json:"lastModifiedTime"`
	RowAccessPolicyReference *RowAccessPolicyReference `json:"rowAccessPolicyReference"`
}
