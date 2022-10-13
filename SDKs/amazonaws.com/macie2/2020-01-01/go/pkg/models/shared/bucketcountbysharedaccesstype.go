package shared

type BucketCountBySharedAccessType struct {
	External  *int64 `json:"external"`
	Internal  *int64 `json:"internal"`
	NotShared *int64 `json:"notShared"`
	Unknown   *int64 `json:"unknown"`
}
