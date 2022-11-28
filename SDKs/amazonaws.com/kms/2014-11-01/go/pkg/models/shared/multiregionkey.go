package shared

// MultiRegionKey
// Describes the primary or replica key in a multi-Region key.
type MultiRegionKey struct {
	Arn    *string `json:"Arn,omitempty"`
	Region *string `json:"Region,omitempty"`
}
