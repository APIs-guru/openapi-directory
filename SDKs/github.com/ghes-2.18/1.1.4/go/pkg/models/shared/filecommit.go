package shared



type FileCommitCommitAuthor struct {
    Date *string `json:"date,omitempty"`
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type FileCommitCommitCommitter struct {
    Date *string `json:"date,omitempty"`
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type FileCommitCommitParents struct {
    HTMLURL *string `json:"html_url,omitempty"`
    Sha *string `json:"sha,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type FileCommitCommitTree struct {
    Sha *string `json:"sha,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type FileCommitCommitVerification struct {
    Payload *string `json:"payload,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Signature *string `json:"signature,omitempty"`
    Verified *bool `json:"verified,omitempty"`
    
}

type FileCommitCommit struct {
    Author *FileCommitCommitAuthor `json:"author,omitempty"`
    Committer *FileCommitCommitCommitter `json:"committer,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    Message *string `json:"message,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    Parents []FileCommitCommitParents `json:"parents,omitempty"`
    Sha *string `json:"sha,omitempty"`
    Tree *FileCommitCommitTree `json:"tree,omitempty"`
    URL *string `json:"url,omitempty"`
    Verification *FileCommitCommitVerification `json:"verification,omitempty"`
    
}

type FileCommitContentLinks struct {
    Git *string `json:"git,omitempty"`
    HTML *string `json:"html,omitempty"`
    Self *string `json:"self,omitempty"`
    
}

type FileCommitContent struct {
    Links *FileCommitContentLinks `json:"_links,omitempty"`
    DownloadURL *string `json:"download_url,omitempty"`
    GitURL *string `json:"git_url,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    Sha *string `json:"sha,omitempty"`
    Size *int64 `json:"size,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type FileCommit struct {
    Commit FileCommitCommit `json:"commit"`
    Content FileCommitContent `json:"content"`
    
}

