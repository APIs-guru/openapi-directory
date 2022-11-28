package shared

// VersionSearchResults
// Describes the response received when searching for artifacts.
type VersionSearchResults struct {
	Count    int64             `json:"count"`
	Versions []SearchedVersion `json:"versions"`
}
