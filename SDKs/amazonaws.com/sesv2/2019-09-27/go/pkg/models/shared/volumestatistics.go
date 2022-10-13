package shared

type VolumeStatistics struct {
	InboxRawCount  *int64 `json:"InboxRawCount"`
	ProjectedInbox *int64 `json:"ProjectedInbox"`
	ProjectedSpam  *int64 `json:"ProjectedSpam"`
	SpamRawCount   *int64 `json:"SpamRawCount"`
}
