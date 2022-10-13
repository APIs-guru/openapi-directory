package shared

type ListPrintersResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Printers      []Printer `json:"printers"`
}
