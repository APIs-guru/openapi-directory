package shared



type CombinedCommitStatus struct {
    CommitURL string `json:"commit_url"`
    Repository MinimalRepository `json:"repository"`
    Sha string `json:"sha"`
    State string `json:"state"`
    Statuses []SimpleCommitStatus `json:"statuses"`
    TotalCount int64 `json:"total_count"`
    URL string `json:"url"`
    
}

