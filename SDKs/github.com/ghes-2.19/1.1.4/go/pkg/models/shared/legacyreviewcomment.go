package shared



type LegacyReviewCommentLinksHTML struct {
    Href *string `json:"href,omitempty"`
    
}

type LegacyReviewCommentLinksPullRequest struct {
    Href *string `json:"href,omitempty"`
    
}

type LegacyReviewCommentLinksSelf struct {
    Href *string `json:"href,omitempty"`
    
}

type LegacyReviewCommentLinks struct {
    HTML *LegacyReviewCommentLinksHTML `json:"html,omitempty"`
    PullRequest *LegacyReviewCommentLinksPullRequest `json:"pull_request,omitempty"`
    Self *LegacyReviewCommentLinksSelf `json:"self,omitempty"`
    
}

type LegacyReviewCommentUser struct {
    AvatarURL *string `json:"avatar_url,omitempty"`
    EventsURL *string `json:"events_url,omitempty"`
    FollowersURL *string `json:"followers_url,omitempty"`
    FollowingURL *string `json:"following_url,omitempty"`
    GistsURL *string `json:"gists_url,omitempty"`
    GravatarID *string `json:"gravatar_id,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Login *string `json:"login,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    OrganizationsURL *string `json:"organizations_url,omitempty"`
    ReceivedEventsURL *string `json:"received_events_url,omitempty"`
    ReposURL *string `json:"repos_url,omitempty"`
    SiteAdmin *bool `json:"site_admin,omitempty"`
    StarredURL *string `json:"starred_url,omitempty"`
    SubscriptionsURL *string `json:"subscriptions_url,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type LegacyReviewComment struct {
    Links *LegacyReviewCommentLinks `json:"_links,omitempty"`
    AuthorAssociation *string `json:"author_association,omitempty"`
    Body *string `json:"body,omitempty"`
    CommitID *string `json:"commit_id,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    DiffHunk *string `json:"diff_hunk,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    ID *int64 `json:"id,omitempty"`
    InReplyToID *int64 `json:"in_reply_to_id,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    OriginalCommitID *string `json:"original_commit_id,omitempty"`
    OriginalPosition *int64 `json:"original_position,omitempty"`
    Path *string `json:"path,omitempty"`
    Position *int64 `json:"position,omitempty"`
    PullRequestReviewID *int64 `json:"pull_request_review_id,omitempty"`
    PullRequestURL *string `json:"pull_request_url,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    URL *string `json:"url,omitempty"`
    User *LegacyReviewCommentUser `json:"user,omitempty"`
    
}

