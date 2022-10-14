package shared

import (
	"time"
)

type BigOvenModelAPIReply struct {
	Comment      *string                      `json:"Comment,omitempty"`
	CreationDate *time.Time                   `json:"CreationDate,omitempty"`
	ID           *string                      `json:"ID,omitempty"`
	LastModified *time.Time                   `json:"LastModified,omitempty"`
	Poster       *BigOvenModelAPIUserInfoTiny `json:"Poster,omitempty"`
	ReviewID     *string                      `json:"ReviewID,omitempty"`
}
