package shared

type ProductVisibilityTracksEnum string

const (
	ProductVisibilityTracksEnumAppTrackUnspecified ProductVisibilityTracksEnum = "appTrackUnspecified"
	ProductVisibilityTracksEnumProduction          ProductVisibilityTracksEnum = "production"
	ProductVisibilityTracksEnumBeta                ProductVisibilityTracksEnum = "beta"
	ProductVisibilityTracksEnumAlpha               ProductVisibilityTracksEnum = "alpha"
)

// ProductVisibility
// A product to be made visible to a user.
type ProductVisibility struct {
	ProductID *string                       `json:"productId,omitempty"`
	TrackIds  []string                      `json:"trackIds,omitempty"`
	Tracks    []ProductVisibilityTracksEnum `json:"tracks,omitempty"`
}
