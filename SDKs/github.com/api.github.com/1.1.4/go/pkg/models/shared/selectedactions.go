package shared

type SelectedActions struct {
	GithubOwnedAllowed bool     `json:"github_owned_allowed"`
	PatternsAllowed    []string `json:"patterns_allowed"`
	VerifiedAllowed    bool     `json:"verified_allowed"`
}
