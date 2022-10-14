package shared

import (
	"time"
)

type BigOvenModelAPIReview struct {
	ActiveMinutes *int32                   `json:"ActiveMinutes,omitempty"`
	Comment       *string                  `json:"Comment,omitempty"`
	CreationDate  *time.Time               `json:"CreationDate,omitempty"`
	FeaturedReply *BigOvenModelAPIReply    `json:"FeaturedReply,omitempty"`
	GUID          *string                  `json:"GUID,omitempty"`
	ID            *string                  `json:"ID,omitempty"`
	LastModified  *time.Time               `json:"LastModified,omitempty"`
	ParentID      *int64                   `json:"ParentID,omitempty"`
	Poster        *BigOvenModelAPIUserInfo `json:"Poster,omitempty"`
	Replies       []BigOvenModelAPIReview  `json:"Replies,omitempty"`
	ReplyCount    *int32                   `json:"ReplyCount,omitempty"`
	ReviewID      *int64                   `json:"ReviewID,omitempty"`
	StarRating    *float64                 `json:"StarRating,omitempty"`
	TotalMinutes  *int32                   `json:"TotalMinutes,omitempty"`
}
