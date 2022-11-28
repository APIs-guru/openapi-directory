package shared

// TaggedDatabase
// A structure describing a database resource with tags.
type TaggedDatabase struct {
	Database *DatabaseResource `json:"Database,omitempty"`
	LfTags   []LfTagPair       `json:"LFTags,omitempty"`
}
