package shared

import (
"time")

type GitCommitAuthor struct {
    Date time.Time `json:"date"`
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type GitCommitCommitter struct {
    Date time.Time `json:"date"`
    Email string `json:"email"`
    Name string `json:"name"`
    
}

type GitCommitParents struct {
    HTMLURL string `json:"html_url"`
    Sha string `json:"sha"`
    URL string `json:"url"`
    
}

type GitCommitTree struct {
    Sha string `json:"sha"`
    URL string `json:"url"`
    
}

type GitCommitVerification struct {
    Payload string `json:"payload"`
    Reason string `json:"reason"`
    Signature string `json:"signature"`
    Verified bool `json:"verified"`
    
}

type GitCommit struct {
    Author GitCommitAuthor `json:"author"`
    Committer GitCommitCommitter `json:"committer"`
    HTMLURL string `json:"html_url"`
    Message string `json:"message"`
    NodeID string `json:"node_id"`
    Parents []GitCommitParents `json:"parents"`
    Sha string `json:"sha"`
    Tree GitCommitTree `json:"tree"`
    URL string `json:"url"`
    Verification GitCommitVerification `json:"verification"`
    
}

