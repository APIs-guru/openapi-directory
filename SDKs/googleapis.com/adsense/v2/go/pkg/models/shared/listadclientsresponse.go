package shared

type ListAdClientsResponse struct {
	AdClients     []AdClient `json:"adClients"`
	NextPageToken *string    `json:"nextPageToken"`
}
