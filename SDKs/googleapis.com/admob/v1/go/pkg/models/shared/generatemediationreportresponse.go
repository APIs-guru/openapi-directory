package shared

type GenerateMediationReportResponse struct {
	Footer *ReportFooter `json:"footer"`
	Header *ReportHeader `json:"header"`
	Row    *ReportRow    `json:"row"`
}
