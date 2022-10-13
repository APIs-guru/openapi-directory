package shared

type ListDomainsRequest struct {
	Marker   *string `json:"Marker"`
	MaxItems *int64  `json:"MaxItems"`
}
