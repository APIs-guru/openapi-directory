package shared

type ListResourceDataSyncRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	SyncType   *string `json:"SyncType"`
}
