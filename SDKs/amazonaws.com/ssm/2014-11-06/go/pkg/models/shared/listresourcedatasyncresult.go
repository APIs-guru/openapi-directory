package shared

type ListResourceDataSyncResult struct {
	NextToken             *string                `json:"NextToken"`
	ResourceDataSyncItems []ResourceDataSyncItem `json:"ResourceDataSyncItems"`
}
