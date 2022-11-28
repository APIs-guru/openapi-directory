package shared

// IssueEventForIssue
// Issue Event for Issue
type IssueEventForIssue struct {
	Actor             *SimpleUser            `json:"actor,omitempty"`
	AuthorAssociation *AuthorAssociationEnum `json:"author_association,omitempty"`
	Body              *string                `json:"body,omitempty"`
	BodyHTML          *string                `json:"body_html,omitempty"`
	BodyText          *string                `json:"body_text,omitempty"`
	CommitID          *string                `json:"commit_id,omitempty"`
	CommitURL         *string                `json:"commit_url,omitempty"`
	CreatedAt         *string                `json:"created_at,omitempty"`
	Event             *string                `json:"event,omitempty"`
	HTMLURL           *string                `json:"html_url,omitempty"`
	ID                *int64                 `json:"id,omitempty"`
	IssueURL          *string                `json:"issue_url,omitempty"`
	LockReason        *string                `json:"lock_reason,omitempty"`
	Message           *string                `json:"message,omitempty"`
	NodeID            *string                `json:"node_id,omitempty"`
	PullRequestURL    *string                `json:"pull_request_url,omitempty"`
	Sha               *string                `json:"sha,omitempty"`
	State             *string                `json:"state,omitempty"`
	SubmittedAt       *string                `json:"submitted_at,omitempty"`
	UpdatedAt         *string                `json:"updated_at,omitempty"`
	URL               *string                `json:"url,omitempty"`
}
