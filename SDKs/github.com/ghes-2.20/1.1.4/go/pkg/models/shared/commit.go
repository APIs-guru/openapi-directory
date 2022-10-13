package shared

type CommitAuthorSimpleUser struct {
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
	StarredAt         *string `json:"starred_at"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type CommitCommitAuthorGitUser struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type CommitCommitCommitterGitUser struct {
	Date  *string `json:"date"`
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

type CommitCommitTree struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

type CommitCommit struct {
	Author       CommitCommitAuthorGitUser    `json:"author"`
	CommentCount int64                        `json:"comment_count"`
	Committer    CommitCommitCommitterGitUser `json:"committer"`
	Message      string                       `json:"message"`
	Tree         CommitCommitTree             `json:"tree"`
	URL          string                       `json:"url"`
	Verification *Verification                `json:"verification"`
}

type CommitCommitterSimpleUser struct {
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
	StarredAt         *string `json:"starred_at"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type CommitFiles struct {
	Additions        *int64  `json:"additions"`
	BlobURL          *string `json:"blob_url"`
	Changes          *int64  `json:"changes"`
	ContentsURL      *string `json:"contents_url"`
	Deletions        *int64  `json:"deletions"`
	Filename         *string `json:"filename"`
	Patch            *string `json:"patch"`
	PreviousFilename *string `json:"previous_filename"`
	RawURL           *string `json:"raw_url"`
	Sha              *string `json:"sha"`
	Status           *string `json:"status"`
}

type CommitParents struct {
	HTMLURL *string `json:"html_url"`
	Sha     string  `json:"sha"`
	URL     string  `json:"url"`
}

type CommitStats struct {
	Additions *int64 `json:"additions"`
	Deletions *int64 `json:"deletions"`
	Total     *int64 `json:"total"`
}

type Commit struct {
	Author      CommitAuthorSimpleUser    `json:"author"`
	CommentsURL string                    `json:"comments_url"`
	Commit      CommitCommit              `json:"commit"`
	Committer   CommitCommitterSimpleUser `json:"committer"`
	Files       []CommitFiles             `json:"files"`
	HTMLURL     string                    `json:"html_url"`
	NodeID      string                    `json:"node_id"`
	Parents     []CommitParents           `json:"parents"`
	Sha         string                    `json:"sha"`
	Stats       *CommitStats              `json:"stats"`
	URL         string                    `json:"url"`
}
