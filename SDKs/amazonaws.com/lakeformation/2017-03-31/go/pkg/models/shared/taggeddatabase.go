package shared

type TaggedDatabase struct {
	Database *DatabaseResource `json:"Database,omitempty"`
	LfTags   []LfTagPair       `json:"LFTags,omitempty"`
}
