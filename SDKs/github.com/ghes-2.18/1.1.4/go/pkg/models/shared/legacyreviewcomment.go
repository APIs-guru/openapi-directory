package shared

type LegacyReviewCommentLinksHTML struct {
	Href *string `json:"href"`
}

type LegacyReviewCommentLinksPullRequest struct {
	Href *string `json:"href"`
}

type LegacyReviewCommentLinksSelf struct {
	Href *string `json:"href"`
}

type LegacyReviewCommentLinks struct {
	HTML        *LegacyReviewCommentLinksHTML        `json:"html"`
	PullRequest *LegacyReviewCommentLinksPullRequest `json:"pull_request"`
	Self        *LegacyReviewCommentLinksSelf        `json:"self"`
}

type LegacyReviewCommentUser struct {
	AvatarURL         *string `json:"avatar_url"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HTMLURL           *string `json:"html_url"`
	ID                *int64  `json:"id"`
	Login             *string `json:"login"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	SiteAdmin         *bool   `json:"site_admin"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

type LegacyReviewComment struct {
	Links               *LegacyReviewCommentLinks `json:"_links"`
	AuthorAssociation   *string                   `json:"author_association"`
	Body                *string                   `json:"body"`
	CommitID            *string                   `json:"commit_id"`
	CreatedAt           *string                   `json:"created_at"`
	DiffHunk            *string                   `json:"diff_hunk"`
	HTMLURL             *string                   `json:"html_url"`
	ID                  *int64                    `json:"id"`
	InReplyToID         *int64                    `json:"in_reply_to_id"`
	NodeID              *string                   `json:"node_id"`
	OriginalCommitID    *string                   `json:"original_commit_id"`
	OriginalPosition    *int64                    `json:"original_position"`
	Path                *string                   `json:"path"`
	Position            *int64                    `json:"position"`
	PullRequestReviewID *int64                    `json:"pull_request_review_id"`
	PullRequestURL      *string                   `json:"pull_request_url"`
	UpdatedAt           *string                   `json:"updated_at"`
	URL                 *string                   `json:"url"`
	User                *LegacyReviewCommentUser  `json:"user"`
}
