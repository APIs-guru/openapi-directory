package shared

type GoogleSheetsOptions struct {
	Range           *string `json:"range"`
	SkipLeadingRows *string `json:"skipLeadingRows"`
}
