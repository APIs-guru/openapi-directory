package shared

type TaggedDatabase struct {
	Database *DatabaseResource `json:"Database"`
	LfTags   []LfTagPair       `json:"LFTags"`
}
