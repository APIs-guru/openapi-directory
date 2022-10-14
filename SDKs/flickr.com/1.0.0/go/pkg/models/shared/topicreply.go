package shared

type TopicReplyMessage struct {
	Content *string `json:"_content,omitempty"`
}

type TopicReply struct {
	Author          *string            `json:"author,omitempty"`
	AuthorIsDeleted *bool              `json:"author_is_deleted,omitempty"`
	AuthorPathAlias *string            `json:"author_path_alias,omitempty"`
	Authorname      *string            `json:"authorname,omitempty"`
	CanDelete       *bool              `json:"can_delete,omitempty"`
	CanEdit         *bool              `json:"can_edit,omitempty"`
	Datecreate      *string            `json:"datecreate,omitempty"`
	Iconfarm        *string            `json:"iconfarm,omitempty"`
	Iconserver      *string            `json:"iconserver,omitempty"`
	ID              *string            `json:"id,omitempty"`
	IsPro           *bool              `json:"is_pro,omitempty"`
	Lastedit        *string            `json:"lastedit,omitempty"`
	Message         *TopicReplyMessage `json:"message,omitempty"`
}
