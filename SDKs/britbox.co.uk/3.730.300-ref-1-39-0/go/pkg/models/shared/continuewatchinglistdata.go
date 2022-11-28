package shared

// ContinueWatchingListData
// List data for ContinueWatching List
type ContinueWatchingListData struct {
	ItemInclusions map[string]ContinueWatchingListDataExpansion `json:"itemInclusions,omitempty"`
}
