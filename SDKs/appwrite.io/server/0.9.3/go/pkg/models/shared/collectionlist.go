package shared

// CollectionList
// Collections List
type CollectionList struct {
	Collections []Collection `json:"collections"`
	Sum         int32        `json:"sum"`
}
