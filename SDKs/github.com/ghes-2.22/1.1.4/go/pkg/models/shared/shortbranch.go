package shared

type ShortBranchCommit struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

// ShortBranch
// Short Branch
type ShortBranch struct {
	Commit        ShortBranchCommit `json:"commit"`
	Name          string            `json:"name"`
	Protected     bool              `json:"protected"`
	Protection    *BranchProtection `json:"protection,omitempty"`
	ProtectionURL *string           `json:"protection_url,omitempty"`
}
