package shared

type ObjectLevelStatistics struct {
	FileType     *int64 `json:"fileType,omitempty"`
	StorageClass *int64 `json:"storageClass,omitempty"`
	Total        *int64 `json:"total,omitempty"`
}
