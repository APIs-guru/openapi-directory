package shared

type TagList struct {
	Sum  int32 `json:"sum"`
	Tags []Tag `json:"tags"`
}
