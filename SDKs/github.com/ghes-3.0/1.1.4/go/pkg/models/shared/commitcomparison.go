package shared




type CommitComparisonStatusEnum string

const (
    CommitComparisonStatusEnumDiverged CommitComparisonStatusEnum = "diverged"
CommitComparisonStatusEnumAhead CommitComparisonStatusEnum = "ahead"
CommitComparisonStatusEnumBehind CommitComparisonStatusEnum = "behind"
CommitComparisonStatusEnumIdentical CommitComparisonStatusEnum = "identical"
)


type CommitComparison struct {
    AheadBy int64 `json:"ahead_by"`
    BaseCommit Commit `json:"base_commit"`
    BehindBy int64 `json:"behind_by"`
    Commits []Commit `json:"commits"`
    DiffURL string `json:"diff_url"`
    Files []DiffEntry `json:"files,omitempty"`
    HTMLURL string `json:"html_url"`
    MergeBaseCommit Commit `json:"merge_base_commit"`
    PatchURL string `json:"patch_url"`
    PermalinkURL string `json:"permalink_url"`
    Status CommitComparisonStatusEnum `json:"status"`
    TotalCommits int64 `json:"total_commits"`
    URL string `json:"url"`
    
}

