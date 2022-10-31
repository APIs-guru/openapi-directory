package shared



type Report struct {
    ColumnHeader *ColumnHeader `json:"columnHeader,omitempty"`
    Data *ReportData `json:"data,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

