package shared

type CollectionList struct {
	Collections []Collection `json:"collections"`
	Sum         int32        `json:"sum"`
}
