package shared

type ListPrintersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Printers      []Printer `json:"printers,omitempty"`
}
