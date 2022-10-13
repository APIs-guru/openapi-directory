package shared

type GoogleCloudApigeeV1ExportRequest struct {
	CsvDelimiter  *string                       `json:"csvDelimiter"`
	DatastoreName *string                       `json:"datastoreName"`
	DateRange     *GoogleCloudApigeeV1DateRange `json:"dateRange"`
	Description   *string                       `json:"description"`
	Name          *string                       `json:"name"`
	OutputFormat  *string                       `json:"outputFormat"`
}
