package shared

type LabelCountersForWorkteam struct {
	HumanLabeled *int64 `json:"HumanLabeled"`
	PendingHuman *int64 `json:"PendingHuman"`
	Total        *int64 `json:"Total"`
}
