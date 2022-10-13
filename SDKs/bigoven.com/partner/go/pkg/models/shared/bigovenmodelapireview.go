package shared

import (
	"time"
)

type BigOvenModelAPIReview struct {
	ActiveMinutes *int32                   `json:"ActiveMinutes"`
	Comment       *string                  `json:"Comment"`
	CreationDate  *time.Time               `json:"CreationDate"`
	FeaturedReply *BigOvenModelAPIReply    `json:"FeaturedReply"`
	GUID          *string                  `json:"GUID"`
	ID            *string                  `json:"ID"`
	LastModified  *time.Time               `json:"LastModified"`
	ParentID      *int64                   `json:"ParentID"`
	Poster        *BigOvenModelAPIUserInfo `json:"Poster"`
	Replies       []BigOvenModelAPIReview  `json:"Replies"`
	ReplyCount    *int32                   `json:"ReplyCount"`
	ReviewID      *int64                   `json:"ReviewID"`
	StarRating    *float64                 `json:"StarRating"`
	TotalMinutes  *int32                   `json:"TotalMinutes"`
}
