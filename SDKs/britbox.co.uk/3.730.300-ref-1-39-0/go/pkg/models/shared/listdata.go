package shared

// ListData
// Extra data to accompany ItemList content. The (single) key in the object is
// the list name and the data changes depending on the list
type ListData struct {
	ContinueWatching *ContinueWatchingListData `json:"ContinueWatching,omitempty"`
}
