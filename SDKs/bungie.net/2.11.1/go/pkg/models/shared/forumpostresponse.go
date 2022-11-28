package shared

import (
	"time"
)

type ForumPostResponse struct {
	IsPinned            *bool
	IgnoreStatus        *IgnoresIgnoreResponse
	IsActive            *bool
	IsAnnouncement      *bool
	LastReplyTimestamp  *time.Time
	LatestReplyAuthorID *int64
	LatestReplyPostID   *int64
	Locale              *string
	Popularity          *int32
	Thumbnail           *string
	URLMediaType        *int32
	UserHasMutedPost    *bool
	UserHasRated        *bool
	UserRating          *int32
}
