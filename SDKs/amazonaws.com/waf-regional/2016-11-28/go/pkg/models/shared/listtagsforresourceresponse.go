package shared

type ListTagsForResourceResponse struct {
	NextMarker         *string             `json:"NextMarker"`
	TagInfoForResource *TagInfoForResource `json:"TagInfoForResource"`
}
