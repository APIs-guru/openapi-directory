package shared

import (
	"time"
)

type BigOvenModelAPIReply struct {
	Comment      *string                      `json:"Comment"`
	CreationDate *time.Time                   `json:"CreationDate"`
	ID           *string                      `json:"ID"`
	LastModified *time.Time                   `json:"LastModified"`
	Poster       *BigOvenModelAPIUserInfoTiny `json:"Poster"`
	ReviewID     *string                      `json:"ReviewID"`
}
