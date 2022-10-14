package shared

import (
	"time"
)

type VideoDetailsScheduledUpdate struct {
	Privacy  *int64    `json:"privacy,omitempty"`
	UpdateAt time.Time `json:"updateAt"`
}

type VideoDetailsUserHistory struct {
	CurrentTime *int64 `json:"currentTime,omitempty"`
}

type VideoDetails struct {
	Account               *Account                     `json:"account,omitempty"`
	Blacklisted           *bool                        `json:"blacklisted,omitempty"`
	BlacklistedReason     *string                      `json:"blacklistedReason,omitempty"`
	Category              *interface{}                 `json:"category,omitempty"`
	Channel               *interface{}                 `json:"channel,omitempty"`
	CommentsEnabled       *bool                        `json:"commentsEnabled,omitempty"`
	CreatedAt             *time.Time                   `json:"createdAt,omitempty"`
	Description           *string                      `json:"description,omitempty"`
	DescriptionPath       *string                      `json:"descriptionPath,omitempty"`
	Dislikes              *int64                       `json:"dislikes,omitempty"`
	DownloadEnabled       *bool                        `json:"downloadEnabled,omitempty"`
	Duration              *int64                       `json:"duration,omitempty"`
	EmbedPath             *string                      `json:"embedPath,omitempty"`
	Files                 []interface{}                `json:"files,omitempty"`
	ID                    *int64                       `json:"id,omitempty"`
	IsLive                *bool                        `json:"isLive,omitempty"`
	IsLocal               *bool                        `json:"isLocal,omitempty"`
	Language              *interface{}                 `json:"language,omitempty"`
	Licence               *interface{}                 `json:"licence,omitempty"`
	Likes                 *int64                       `json:"likes,omitempty"`
	Name                  *string                      `json:"name,omitempty"`
	Nsfw                  *bool                        `json:"nsfw,omitempty"`
	OriginallyPublishedAt *time.Time                   `json:"originallyPublishedAt,omitempty"`
	PreviewPath           *string                      `json:"previewPath,omitempty"`
	Privacy               *interface{}                 `json:"privacy,omitempty"`
	PublishedAt           *time.Time                   `json:"publishedAt,omitempty"`
	ScheduledUpdate       *VideoDetailsScheduledUpdate `json:"scheduledUpdate,omitempty"`
	ShortUUID             *string                      `json:"shortUUID,omitempty"`
	State                 *interface{}                 `json:"state,omitempty"`
	StreamingPlaylists    []VideoStreamingPlaylists    `json:"streamingPlaylists,omitempty"`
	Support               *string                      `json:"support,omitempty"`
	Tags                  []string                     `json:"tags,omitempty"`
	ThumbnailPath         *string                      `json:"thumbnailPath,omitempty"`
	TrackerUrls           []string                     `json:"trackerUrls,omitempty"`
	UpdatedAt             *time.Time                   `json:"updatedAt,omitempty"`
	UserHistory           *VideoDetailsUserHistory     `json:"userHistory,omitempty"`
	UUID                  *string                      `json:"uuid,omitempty"`
	Views                 *int64                       `json:"views,omitempty"`
	WaitTranscoding       *bool                        `json:"waitTranscoding,omitempty"`
}
