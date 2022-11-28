package shared

// GenerateMediationReportResponse
// The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }]
type GenerateMediationReportResponse struct {
	Footer *ReportFooter `json:"footer,omitempty"`
	Header *ReportHeader `json:"header,omitempty"`
	Row    *ReportRow    `json:"row,omitempty"`
}
