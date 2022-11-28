package shared

// ListNfsSharesResponse
// Response message containing the list of NFS shares.
type ListNfsSharesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	NfsShares     []NfsShare `json:"nfsShares,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
