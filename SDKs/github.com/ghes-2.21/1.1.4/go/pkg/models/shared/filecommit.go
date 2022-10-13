package shared

type FileCommitCommitAuthor struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type FileCommitCommitCommitter struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type FileCommitCommitParents struct {
	HTMLURL *string `json:"html_url"`
	Sha     *string `json:"sha"`
	URL     *string `json:"url"`
}

type FileCommitCommitTree struct {
	Sha *string `json:"sha"`
	URL *string `json:"url"`
}

type FileCommitCommitVerification struct {
	Payload   *string `json:"payload"`
	Reason    *string `json:"reason"`
	Signature *string `json:"signature"`
	Verified  *bool   `json:"verified"`
}

type FileCommitCommit struct {
	Author       *FileCommitCommitAuthor       `json:"author"`
	Committer    *FileCommitCommitCommitter    `json:"committer"`
	HTMLURL      *string                       `json:"html_url"`
	Message      *string                       `json:"message"`
	NodeID       *string                       `json:"node_id"`
	Parents      []FileCommitCommitParents     `json:"parents"`
	Sha          *string                       `json:"sha"`
	Tree         *FileCommitCommitTree         `json:"tree"`
	URL          *string                       `json:"url"`
	Verification *FileCommitCommitVerification `json:"verification"`
}

type FileCommitContentLinks struct {
	Git  *string `json:"git"`
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type FileCommitContent struct {
	Links       *FileCommitContentLinks `json:"_links"`
	DownloadURL *string                 `json:"download_url"`
	GitURL      *string                 `json:"git_url"`
	HTMLURL     *string                 `json:"html_url"`
	Name        *string                 `json:"name"`
	Path        *string                 `json:"path"`
	Sha         *string                 `json:"sha"`
	Size        *int64                  `json:"size"`
	Type        *string                 `json:"type"`
	URL         *string                 `json:"url"`
}

type FileCommit struct {
	Commit  FileCommitCommit  `json:"commit"`
	Content FileCommitContent `json:"content"`
}
