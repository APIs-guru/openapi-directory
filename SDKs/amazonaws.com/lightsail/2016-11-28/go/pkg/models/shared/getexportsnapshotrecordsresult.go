package shared

type GetExportSnapshotRecordsResult struct {
	ExportSnapshotRecords []ExportSnapshotRecord `json:"exportSnapshotRecords,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
