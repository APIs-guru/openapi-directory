package shared

type GetExportSnapshotRecordsResult struct {
	ExportSnapshotRecords []ExportSnapshotRecord `json:"exportSnapshotRecords"`
	NextPageToken         *string                `json:"nextPageToken"`
}
