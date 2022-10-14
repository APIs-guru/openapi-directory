package shared

type GenerateNetworkReportResponse struct {
	Footer *ReportFooter `json:"footer,omitempty"`
	Header *ReportHeader `json:"header,omitempty"`
	Row    *ReportRow    `json:"row,omitempty"`
}
