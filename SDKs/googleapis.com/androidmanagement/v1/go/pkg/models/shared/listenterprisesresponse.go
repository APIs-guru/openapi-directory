package shared

type ListEnterprisesResponse struct {
	Enterprises   []Enterprise `json:"enterprises"`
	NextPageToken *string      `json:"nextPageToken"`
}
