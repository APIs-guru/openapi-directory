package shared

type URLChannel struct {
	Name                 *string `json:"name"`
	ReportingDimensionID *string `json:"reportingDimensionId"`
	URIPattern           *string `json:"uriPattern"`
}
