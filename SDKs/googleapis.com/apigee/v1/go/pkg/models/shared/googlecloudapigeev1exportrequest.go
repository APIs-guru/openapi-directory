package shared



type GoogleCloudApigeeV1ExportRequest struct {
    CsvDelimiter *string `json:"csvDelimiter,omitempty"`
    DatastoreName *string `json:"datastoreName,omitempty"`
    DateRange *GoogleCloudApigeeV1DateRange `json:"dateRange,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    OutputFormat *string `json:"outputFormat,omitempty"`
    
}

