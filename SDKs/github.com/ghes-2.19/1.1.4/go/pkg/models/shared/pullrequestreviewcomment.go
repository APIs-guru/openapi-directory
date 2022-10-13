package shared

import (
	"time"
)

type PullRequestReviewCommentLinksHTML struct {
	Href string `json:"href"`
}

type PullRequestReviewCommentLinksPullRequest struct {
	Href string `json:"href"`
}

type PullRequestReviewCommentLinksSelf struct {
	Href string `json:"href"`
}

type PullRequestReviewCommentLinks struct {
	HTML        PullRequestReviewCommentLinksHTML        `json:"html"`
	PullRequest PullRequestReviewCommentLinksPullRequest `json:"pull_request"`
	Self        PullRequestReviewCommentLinksSelf        `json:"self"`
}

type PullRequestReviewComment struct {
	Links               PullRequestReviewCommentLinks `json:"_links"`
	AuthorAssociation   AuthorAssociationEnum         `json:"author_association"`
	Body                string                        `json:"body"`
	BodyHTML            *string                       `json:"body_html"`
	BodyText            *string                       `json:"body_text"`
	CommitID            string                        `json:"commit_id"`
	CreatedAt           time.Time                     `json:"created_at"`
	DiffHunk            string                        `json:"diff_hunk"`
	HTMLURL             string                        `json:"html_url"`
	ID                  int64                         `json:"id"`
	InReplyToID         *int64                        `json:"in_reply_to_id"`
	NodeID              string                        `json:"node_id"`
	OriginalCommitID    string                        `json:"original_commit_id"`
	OriginalPosition    int64                         `json:"original_position"`
	Path                string                        `json:"path"`
	Position            int64                         `json:"position"`
	PullRequestReviewID int64                         `json:"pull_request_review_id"`
	PullRequestURL      string                        `json:"pull_request_url"`
	Reactions           *ReactionRollup               `json:"reactions"`
	UpdatedAt           time.Time                     `json:"updated_at"`
	URL                 string                        `json:"url"`
	User                SimpleUser                    `json:"user"`
}
