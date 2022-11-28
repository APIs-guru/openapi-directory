package shared

// ArtifactSourceType
// The ID and ID type of an artifact source.
type ArtifactSourceType struct {
	SourceIDType ArtifactSourceIDTypeEnum `json:"SourceIdType"`
	Value        string                   `json:"Value"`
}
