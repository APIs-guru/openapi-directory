package shared

type ListClientsResponse struct {
	Clients       []Client `json:"clients"`
	NextPageToken *string  `json:"nextPageToken"`
}
