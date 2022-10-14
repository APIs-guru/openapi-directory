package shared

type VolumeStatistics struct {
	InboxRawCount  *int64 `json:"InboxRawCount,omitempty"`
	ProjectedInbox *int64 `json:"ProjectedInbox,omitempty"`
	ProjectedSpam  *int64 `json:"ProjectedSpam,omitempty"`
	SpamRawCount   *int64 `json:"SpamRawCount,omitempty"`
}
