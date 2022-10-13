package shared

type ListNfsSharesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	NfsShares     []NfsShare `json:"nfsShares"`
	Unreachable   []string   `json:"unreachable"`
}
