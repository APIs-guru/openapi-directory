package shared

// ManagedConfigurationsSettings
// A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.
type ManagedConfigurationsSettings struct {
	LastUpdatedTimestampMillis *string `json:"lastUpdatedTimestampMillis,omitempty"`
	McmID                      *string `json:"mcmId,omitempty"`
	Name                       *string `json:"name,omitempty"`
}
