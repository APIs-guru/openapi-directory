package shared

type CommitSimpleUser struct {
	AvatarURL         string  `json:"avatar_url"`
	EventsURL         string  `json:"events_url"`
	FollowersURL      string  `json:"followers_url"`
	FollowingURL      string  `json:"following_url"`
	GistsURL          string  `json:"gists_url"`
	GravatarID        string  `json:"gravatar_id"`
	HTMLURL           string  `json:"html_url"`
	ID                int64   `json:"id"`
	Login             string  `json:"login"`
	NodeID            string  `json:"node_id"`
	OrganizationsURL  string  `json:"organizations_url"`
	ReceivedEventsURL string  `json:"received_events_url"`
	ReposURL          string  `json:"repos_url"`
	SiteAdmin         bool    `json:"site_admin"`
	StarredAt         *string `json:"starred_at,omitempty"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type CommitCommitGitUser struct {
	Date  *string `json:"date,omitempty"`
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type CommitCommitTree struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

type CommitCommit struct {
	Author       CommitCommitGitUser `json:"author"`
	CommentCount int64               `json:"comment_count"`
	Committer    CommitCommitGitUser `json:"committer"`
	Message      string              `json:"message"`
	Tree         CommitCommitTree    `json:"tree"`
	URL          string              `json:"url"`
	Verification *Verification       `json:"verification,omitempty"`
}

type CommitFiles struct {
	Additions        *int64  `json:"additions,omitempty"`
	BlobURL          *string `json:"blob_url,omitempty"`
	Changes          *int64  `json:"changes,omitempty"`
	ContentsURL      *string `json:"contents_url,omitempty"`
	Deletions        *int64  `json:"deletions,omitempty"`
	Filename         *string `json:"filename,omitempty"`
	Patch            *string `json:"patch,omitempty"`
	PreviousFilename *string `json:"previous_filename,omitempty"`
	RawURL           *string `json:"raw_url,omitempty"`
	Sha              *string `json:"sha,omitempty"`
	Status           *string `json:"status,omitempty"`
}

type CommitParents struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Sha     string  `json:"sha"`
	URL     string  `json:"url"`
}

type CommitStats struct {
	Additions *int64 `json:"additions,omitempty"`
	Deletions *int64 `json:"deletions,omitempty"`
	Total     *int64 `json:"total,omitempty"`
}

type Commit struct {
	Author      CommitSimpleUser `json:"author"`
	CommentsURL string           `json:"comments_url"`
	Commit      CommitCommit     `json:"commit"`
	Committer   CommitSimpleUser `json:"committer"`
	Files       []CommitFiles    `json:"files,omitempty"`
	HTMLURL     string           `json:"html_url"`
	NodeID      string           `json:"node_id"`
	Parents     []CommitParents  `json:"parents"`
	Sha         string           `json:"sha"`
	Stats       *CommitStats     `json:"stats,omitempty"`
	URL         string           `json:"url"`
}
