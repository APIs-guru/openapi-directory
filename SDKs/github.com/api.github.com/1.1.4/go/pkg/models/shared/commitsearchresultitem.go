package shared

import (
	"time"
)

type CommitSearchResultItemSimpleUser struct {
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

type CommitSearchResultItemCommitAuthor struct {
	Date  time.Time `json:"date"`
	Email string    `json:"email"`
	Name  string    `json:"name"`
}

type CommitSearchResultItemCommitGitUser struct {
	Date  *string `json:"date,omitempty"`
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type CommitSearchResultItemCommitTree struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

type CommitSearchResultItemCommit struct {
	Author       CommitSearchResultItemCommitAuthor  `json:"author"`
	CommentCount int64                               `json:"comment_count"`
	Committer    CommitSearchResultItemCommitGitUser `json:"committer"`
	Message      string                              `json:"message"`
	Tree         CommitSearchResultItemCommitTree    `json:"tree"`
	URL          string                              `json:"url"`
	Verification *Verification                       `json:"verification,omitempty"`
}

type CommitSearchResultItemGitUser struct {
	Date  *string `json:"date,omitempty"`
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type CommitSearchResultItemParents struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Sha     *string `json:"sha,omitempty"`
	URL     *string `json:"url,omitempty"`
}

// CommitSearchResultItem
// Commit Search Result Item
type CommitSearchResultItem struct {
	Author      CommitSearchResultItemSimpleUser `json:"author"`
	CommentsURL string                           `json:"comments_url"`
	Commit      CommitSearchResultItemCommit     `json:"commit"`
	Committer   CommitSearchResultItemGitUser    `json:"committer"`
	HTMLURL     string                           `json:"html_url"`
	NodeID      string                           `json:"node_id"`
	Parents     []CommitSearchResultItemParents  `json:"parents"`
	Repository  MinimalRepository                `json:"repository"`
	Score       int64                            `json:"score"`
	Sha         string                           `json:"sha"`
	TextMatches []SearchResultTextMatches        `json:"text_matches,omitempty"`
	URL         string                           `json:"url"`
}
