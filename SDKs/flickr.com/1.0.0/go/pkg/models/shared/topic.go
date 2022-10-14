package shared

type TopicMessage struct {
	Content *string `json:"_content,omitempty"`
}

type Topic struct {
	Author          *string       `json:"author,omitempty"`
	AuthorIsDeleted *bool         `json:"author_is_deleted,omitempty"`
	AuthorPathAlias *string       `json:"author_path_alias,omitempty"`
	Authorname      *string       `json:"authorname,omitempty"`
	CanDelete       *bool         `json:"can_delete,omitempty"`
	CanEdit         *bool         `json:"can_edit,omitempty"`
	CanReply        *bool         `json:"can_reply,omitempty"`
	CountReplies    *int64        `json:"count_replies,omitempty"`
	Datecreate      *string       `json:"datecreate,omitempty"`
	Datelastpost    *string       `json:"datelastpost,omitempty"`
	Iconfarm        *string       `json:"iconfarm,omitempty"`
	Iconserver      *string       `json:"iconserver,omitempty"`
	ID              *string       `json:"id,omitempty"`
	IsLocked        *bool         `json:"is_locked,omitempty"`
	IsPro           *bool         `json:"is_pro,omitempty"`
	IsSticky        *bool         `json:"is_sticky,omitempty"`
	LastReply       *string       `json:"last_reply,omitempty"`
	Lastedit        *string       `json:"lastedit,omitempty"`
	Message         *TopicMessage `json:"message,omitempty"`
	Role            *string       `json:"role,omitempty"`
	Subject         *string       `json:"subject,omitempty"`
}
