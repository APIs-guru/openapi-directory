package shared

type TopicReplyMessage struct {
	Content *string `json:"_content"`
}

type TopicReply struct {
	Author          *string            `json:"author"`
	AuthorIsDeleted *bool              `json:"author_is_deleted"`
	AuthorPathAlias *string            `json:"author_path_alias"`
	Authorname      *string            `json:"authorname"`
	CanDelete       *bool              `json:"can_delete"`
	CanEdit         *bool              `json:"can_edit"`
	Datecreate      *string            `json:"datecreate"`
	Iconfarm        *string            `json:"iconfarm"`
	Iconserver      *string            `json:"iconserver"`
	ID              *string            `json:"id"`
	IsPro           *bool              `json:"is_pro"`
	Lastedit        *string            `json:"lastedit"`
	Message         *TopicReplyMessage `json:"message"`
}
