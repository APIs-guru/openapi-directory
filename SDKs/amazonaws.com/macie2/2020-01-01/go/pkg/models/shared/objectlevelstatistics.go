package shared

type ObjectLevelStatistics struct {
	FileType     *int64 `json:"fileType"`
	StorageClass *int64 `json:"storageClass"`
	Total        *int64 `json:"total"`
}
