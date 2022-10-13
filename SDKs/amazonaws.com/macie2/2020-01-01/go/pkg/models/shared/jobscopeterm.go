package shared

type JobScopeTerm struct {
	SimpleScopeTerm *SimpleScopeTerm `json:"simpleScopeTerm"`
	TagScopeTerm    *TagScopeTerm    `json:"tagScopeTerm"`
}
