package shared

// JobScopeTerm
// Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
type JobScopeTerm struct {
	SimpleScopeTerm *SimpleScopeTerm `json:"simpleScopeTerm,omitempty"`
	TagScopeTerm    *TagScopeTerm    `json:"tagScopeTerm,omitempty"`
}
