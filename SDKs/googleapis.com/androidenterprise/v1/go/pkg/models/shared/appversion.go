package shared

type AppVersionTrackEnum string

const (
	AppVersionTrackEnumAppTrackUnspecified AppVersionTrackEnum = "appTrackUnspecified"
	AppVersionTrackEnumProduction          AppVersionTrackEnum = "production"
	AppVersionTrackEnumBeta                AppVersionTrackEnum = "beta"
	AppVersionTrackEnumAlpha               AppVersionTrackEnum = "alpha"
)

type AppVersion struct {
	IsProduction  *bool                `json:"isProduction"`
	Track         *AppVersionTrackEnum `json:"track"`
	TrackID       []string             `json:"trackId"`
	VersionCode   *int32               `json:"versionCode"`
	VersionString *string              `json:"versionString"`
}
