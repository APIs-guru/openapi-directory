package shared

type LayersListItem struct {
	LatestMatchingVersion *LayerVersionsListItem `json:"LatestMatchingVersion"`
	LayerArn              *string                `json:"LayerArn"`
	LayerName             *string                `json:"LayerName"`
}
