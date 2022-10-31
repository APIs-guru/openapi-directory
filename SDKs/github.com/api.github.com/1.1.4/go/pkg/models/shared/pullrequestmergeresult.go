package shared



type PullRequestMergeResult struct {
    Merged bool `json:"merged"`
    Message string `json:"message"`
    Sha string `json:"sha"`
    
}

