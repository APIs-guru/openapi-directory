package shared

type AppVersionTrackEnum string

const (
	AppVersionTrackEnumAppTrackUnspecified AppVersionTrackEnum = "appTrackUnspecified"
	AppVersionTrackEnumProduction          AppVersionTrackEnum = "production"
	AppVersionTrackEnumBeta                AppVersionTrackEnum = "beta"
	AppVersionTrackEnumAlpha               AppVersionTrackEnum = "alpha"
)

type AppVersion struct {
	IsProduction  *bool                `json:"isProduction,omitempty"`
	Track         *AppVersionTrackEnum `json:"track,omitempty"`
	TrackID       []string             `json:"trackId,omitempty"`
	VersionCode   *int32               `json:"versionCode,omitempty"`
	VersionString *string              `json:"versionString,omitempty"`
}
