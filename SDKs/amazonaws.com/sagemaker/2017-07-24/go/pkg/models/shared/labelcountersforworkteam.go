package shared

type LabelCountersForWorkteam struct {
	HumanLabeled *int64 `json:"HumanLabeled,omitempty"`
	PendingHuman *int64 `json:"PendingHuman,omitempty"`
	Total        *int64 `json:"Total,omitempty"`
}
