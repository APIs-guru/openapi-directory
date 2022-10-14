package shared

type LayersListItem struct {
	LatestMatchingVersion *LayerVersionsListItem `json:"LatestMatchingVersion,omitempty"`
	LayerArn              *string                `json:"LayerArn,omitempty"`
	LayerName             *string                `json:"LayerName,omitempty"`
}
