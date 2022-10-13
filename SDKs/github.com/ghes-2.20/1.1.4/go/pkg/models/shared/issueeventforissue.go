package shared

type IssueEventForIssue struct {
	Actor             *SimpleUser            `json:"actor"`
	AuthorAssociation *AuthorAssociationEnum `json:"author_association"`
	Body              *string                `json:"body"`
	BodyHTML          *string                `json:"body_html"`
	BodyText          *string                `json:"body_text"`
	CommitID          *string                `json:"commit_id"`
	CommitURL         *string                `json:"commit_url"`
	CreatedAt         *string                `json:"created_at"`
	Event             *string                `json:"event"`
	HTMLURL           *string                `json:"html_url"`
	ID                *int64                 `json:"id"`
	IssueURL          *string                `json:"issue_url"`
	LockReason        *string                `json:"lock_reason"`
	Message           *string                `json:"message"`
	NodeID            *string                `json:"node_id"`
	PullRequestURL    *string                `json:"pull_request_url"`
	Sha               *string                `json:"sha"`
	State             *string                `json:"state"`
	SubmittedAt       *string                `json:"submitted_at"`
	UpdatedAt         *string                `json:"updated_at"`
	URL               *string                `json:"url"`
}
