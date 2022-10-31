package shared

type VersionSearchResults struct {
	Count    int64             `json:"count"`
	Versions []SearchedVersion `json:"versions"`
}
