package shared

type ListDomainsRequest struct {
	Marker   *string `json:"Marker,omitempty"`
	MaxItems *int64  `json:"MaxItems,omitempty"`
}
