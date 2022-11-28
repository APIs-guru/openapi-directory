package shared

// DestinyConfigDestinyManifest
// DestinyManifest is the external-facing contract for just the properties needed by those calling the Destiny Platform.
type DestinyConfigDestinyManifest struct {
	IconImagePyramidInfo           []DestinyConfigImagePyramidEntry
	JSONWorldComponentContentPaths map[string]map[string]string
	JSONWorldContentPaths          map[string]string
	MobileAssetContentPath         *string
	MobileClanBannerDatabasePath   *string
	MobileGearAssetDataBases       []DestinyConfigGearAssetDataBaseDefinition
	MobileGearCdn                  map[string]string
	MobileWorldContentPaths        map[string]string
	Version                        *string
}
