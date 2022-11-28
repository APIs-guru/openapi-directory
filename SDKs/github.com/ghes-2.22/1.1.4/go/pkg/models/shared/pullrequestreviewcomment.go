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

type PullRequestReviewCommentSideEnum string

const (
	PullRequestReviewCommentSideEnumLeft  PullRequestReviewCommentSideEnum = "LEFT"
	PullRequestReviewCommentSideEnumRight PullRequestReviewCommentSideEnum = "RIGHT"
)

type PullRequestReviewCommentStartSideEnum string

const (
	PullRequestReviewCommentStartSideEnumLeft  PullRequestReviewCommentStartSideEnum = "LEFT"
	PullRequestReviewCommentStartSideEnumRight PullRequestReviewCommentStartSideEnum = "RIGHT"
)

// PullRequestReviewComment
// Pull Request Review Comments are comments on a portion of the Pull Request's diff.
type PullRequestReviewComment struct {
	Links               PullRequestReviewCommentLinks          `json:"_links"`
	AuthorAssociation   AuthorAssociationEnum                  `json:"author_association"`
	Body                string                                 `json:"body"`
	BodyHTML            *string                                `json:"body_html,omitempty"`
	BodyText            *string                                `json:"body_text,omitempty"`
	CommitID            string                                 `json:"commit_id"`
	CreatedAt           time.Time                              `json:"created_at"`
	DiffHunk            string                                 `json:"diff_hunk"`
	HTMLURL             string                                 `json:"html_url"`
	ID                  int64                                  `json:"id"`
	InReplyToID         *int64                                 `json:"in_reply_to_id,omitempty"`
	Line                *int64                                 `json:"line,omitempty"`
	NodeID              string                                 `json:"node_id"`
	OriginalCommitID    string                                 `json:"original_commit_id"`
	OriginalLine        *int64                                 `json:"original_line,omitempty"`
	OriginalPosition    int64                                  `json:"original_position"`
	OriginalStartLine   *int64                                 `json:"original_start_line,omitempty"`
	Path                string                                 `json:"path"`
	Position            int64                                  `json:"position"`
	PullRequestReviewID int64                                  `json:"pull_request_review_id"`
	PullRequestURL      string                                 `json:"pull_request_url"`
	Reactions           *ReactionRollup                        `json:"reactions,omitempty"`
	Side                *PullRequestReviewCommentSideEnum      `json:"side,omitempty"`
	StartLine           *int64                                 `json:"start_line,omitempty"`
	StartSide           *PullRequestReviewCommentStartSideEnum `json:"start_side,omitempty"`
	UpdatedAt           time.Time                              `json:"updated_at"`
	URL                 string                                 `json:"url"`
	User                SimpleUser                             `json:"user"`
}
