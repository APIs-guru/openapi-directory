package shared

import (
	"time"
)

type ReviewCommentLinks struct {
	HTML        Link `json:"html"`
	PullRequest Link `json:"pull_request"`
	Self        Link `json:"self"`
}

type ReviewCommentSideEnum string

const (
	ReviewCommentSideEnumLeft  ReviewCommentSideEnum = "LEFT"
	ReviewCommentSideEnumRight ReviewCommentSideEnum = "RIGHT"
)

type ReviewCommentStartSideEnum string

const (
	ReviewCommentStartSideEnumLeft  ReviewCommentStartSideEnum = "LEFT"
	ReviewCommentStartSideEnumRight ReviewCommentStartSideEnum = "RIGHT"
)

type ReviewCommentUserSimpleUser struct {
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

type ReviewComment struct {
	Links               ReviewCommentLinks          `json:"_links"`
	AuthorAssociation   AuthorAssociationEnum       `json:"author_association"`
	Body                string                      `json:"body"`
	BodyHTML            *string                     `json:"body_html"`
	BodyText            *string                     `json:"body_text"`
	CommitID            string                      `json:"commit_id"`
	CreatedAt           time.Time                   `json:"created_at"`
	DiffHunk            string                      `json:"diff_hunk"`
	HTMLURL             string                      `json:"html_url"`
	ID                  int64                       `json:"id"`
	InReplyToID         *int64                      `json:"in_reply_to_id"`
	Line                *int64                      `json:"line"`
	NodeID              string                      `json:"node_id"`
	OriginalCommitID    string                      `json:"original_commit_id"`
	OriginalLine        *int64                      `json:"original_line"`
	OriginalPosition    int64                       `json:"original_position"`
	OriginalStartLine   *int64                      `json:"original_start_line"`
	Path                string                      `json:"path"`
	Position            int64                       `json:"position"`
	PullRequestReviewID int64                       `json:"pull_request_review_id"`
	PullRequestURL      string                      `json:"pull_request_url"`
	Side                *ReviewCommentSideEnum      `json:"side"`
	StartLine           *int64                      `json:"start_line"`
	StartSide           *ReviewCommentStartSideEnum `json:"start_side"`
	UpdatedAt           time.Time                   `json:"updated_at"`
	URL                 string                      `json:"url"`
	User                ReviewCommentUserSimpleUser `json:"user"`
}
