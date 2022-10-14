package shared

type ListNfsSharesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	NfsShares     []NfsShare `json:"nfsShares,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
