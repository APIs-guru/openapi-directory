package shared

type ProductVisibilityTracksEnum string

const (
	ProductVisibilityTracksEnumAppTrackUnspecified ProductVisibilityTracksEnum = "appTrackUnspecified"
	ProductVisibilityTracksEnumProduction          ProductVisibilityTracksEnum = "production"
	ProductVisibilityTracksEnumBeta                ProductVisibilityTracksEnum = "beta"
	ProductVisibilityTracksEnumAlpha               ProductVisibilityTracksEnum = "alpha"
)

type ProductVisibility struct {
	ProductID *string                       `json:"productId"`
	TrackIds  []string                      `json:"trackIds"`
	Tracks    []ProductVisibilityTracksEnum `json:"tracks"`
}
