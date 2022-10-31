package shared



type GistSimpleFiles struct {
    Content *string `json:"content,omitempty"`
    Filename *string `json:"filename,omitempty"`
    Language *string `json:"language,omitempty"`
    RawURL *string `json:"raw_url,omitempty"`
    Size *int64 `json:"size,omitempty"`
    Truncated *bool `json:"truncated,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type GistSimple struct {
    Comments *int64 `json:"comments,omitempty"`
    CommentsURL *string `json:"comments_url,omitempty"`
    CommitsURL *string `json:"commits_url,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    Files map[string]GistSimpleFiles `json:"files,omitempty"`
    ForksURL *string `json:"forks_url,omitempty"`
    GitPullURL *string `json:"git_pull_url,omitempty"`
    GitPushURL *string `json:"git_push_url,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *string `json:"id,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    Owner *SimpleUser `json:"owner,omitempty"`
    Public *bool `json:"public,omitempty"`
    Truncated *bool `json:"truncated,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    URL *string `json:"url,omitempty"`
    User *string `json:"user,omitempty"`
    
}

