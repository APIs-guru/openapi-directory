package shared

import (
	"time"
)

type Comment struct {
	CreatedBy   *Collaborator       `json:"created_by"`
	DateCreated *time.Time          `json:"date_created"`
	ID          *string             `json:"id"`
	Permissions *CommentPermissions `json:"permissions"`
	Text        *string             `json:"text"`
}
