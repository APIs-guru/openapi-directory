package shared

// LayersListItem
// Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
type LayersListItem struct {
	LatestMatchingVersion *LayerVersionsListItem `json:"LatestMatchingVersion,omitempty"`
	LayerArn              *string                `json:"LayerArn,omitempty"`
	LayerName             *string                `json:"LayerName,omitempty"`
}
