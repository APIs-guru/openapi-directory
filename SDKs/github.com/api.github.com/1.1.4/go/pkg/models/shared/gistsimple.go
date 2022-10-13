package shared

type GistSimpleFiles struct {
	Content   *string `json:"content"`
	Filename  *string `json:"filename"`
	Language  *string `json:"language"`
	RawURL    *string `json:"raw_url"`
	Size      *int64  `json:"size"`
	Truncated *bool   `json:"truncated"`
	Type      *string `json:"type"`
}

type GistSimple struct {
	Comments    *int64                     `json:"comments"`
	CommentsURL *string                    `json:"comments_url"`
	CommitsURL  *string                    `json:"commits_url"`
	CreatedAt   *string                    `json:"created_at"`
	Description *string                    `json:"description"`
	Files       map[string]GistSimpleFiles `json:"files"`
	ForksURL    *string                    `json:"forks_url"`
	GitPullURL  *string                    `json:"git_pull_url"`
	GitPushURL  *string                    `json:"git_push_url"`
	HTMLURL     *string                    `json:"html_url"`
	ID          *string                    `json:"id"`
	NodeID      *string                    `json:"node_id"`
	Owner       *SimpleUser                `json:"owner"`
	Public      *bool                      `json:"public"`
	Truncated   *bool                      `json:"truncated"`
	UpdatedAt   *string                    `json:"updated_at"`
	URL         *string                    `json:"url"`
	User        *string                    `json:"user"`
}
