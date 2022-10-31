package shared

import (
"time")

type Comment struct {
    CreatedBy *Collaborator `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    ID *string `json:"id,omitempty"`
    Permissions *CommentPermissions `json:"permissions,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

