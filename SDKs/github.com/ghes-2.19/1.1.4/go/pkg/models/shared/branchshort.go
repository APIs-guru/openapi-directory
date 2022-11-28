package shared

type BranchShortCommit struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

// BranchShort
// Branch Short
type BranchShort struct {
	Commit    BranchShortCommit `json:"commit"`
	Name      string            `json:"name"`
	Protected bool              `json:"protected"`
}
