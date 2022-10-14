package shared

type JobScopeTerm struct {
	SimpleScopeTerm *SimpleScopeTerm `json:"simpleScopeTerm,omitempty"`
	TagScopeTerm    *TagScopeTerm    `json:"tagScopeTerm,omitempty"`
}
