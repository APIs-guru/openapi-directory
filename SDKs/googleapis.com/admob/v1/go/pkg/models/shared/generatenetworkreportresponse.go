package shared

type GenerateNetworkReportResponse struct {
	Footer *ReportFooter `json:"footer"`
	Header *ReportHeader `json:"header"`
	Row    *ReportRow    `json:"row"`
}
