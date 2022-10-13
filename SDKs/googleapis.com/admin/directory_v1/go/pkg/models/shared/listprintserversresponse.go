package shared

type ListPrintServersResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	PrintServers  []PrintServer `json:"printServers"`
}
