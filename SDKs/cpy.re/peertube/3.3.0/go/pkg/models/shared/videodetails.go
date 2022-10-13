package shared

import (
	"time"
)

type VideoDetailsScheduledUpdate struct {
	Privacy  *int64    `json:"privacy"`
	UpdateAt time.Time `json:"updateAt"`
}

type VideoDetailsUserHistory struct {
	CurrentTime *int64 `json:"currentTime"`
}

type VideoDetails struct {
	Account               *Account                     `json:"account"`
	Blacklisted           *bool                        `json:"blacklisted"`
	BlacklistedReason     *string                      `json:"blacklistedReason"`
	Category              *interface{}                 `json:"category"`
	Channel               *interface{}                 `json:"channel"`
	CommentsEnabled       *bool                        `json:"commentsEnabled"`
	CreatedAt             *time.Time                   `json:"createdAt"`
	Description           *string                      `json:"description"`
	DescriptionPath       *string                      `json:"descriptionPath"`
	Dislikes              *int64                       `json:"dislikes"`
	DownloadEnabled       *bool                        `json:"downloadEnabled"`
	Duration              *int64                       `json:"duration"`
	EmbedPath             *string                      `json:"embedPath"`
	Files                 []interface{}                `json:"files"`
	ID                    *int64                       `json:"id"`
	IsLive                *bool                        `json:"isLive"`
	IsLocal               *bool                        `json:"isLocal"`
	Language              *interface{}                 `json:"language"`
	Licence               *interface{}                 `json:"licence"`
	Likes                 *int64                       `json:"likes"`
	Name                  *string                      `json:"name"`
	Nsfw                  *bool                        `json:"nsfw"`
	OriginallyPublishedAt *time.Time                   `json:"originallyPublishedAt"`
	PreviewPath           *string                      `json:"previewPath"`
	Privacy               *interface{}                 `json:"privacy"`
	PublishedAt           *time.Time                   `json:"publishedAt"`
	ScheduledUpdate       *VideoDetailsScheduledUpdate `json:"scheduledUpdate"`
	ShortUUID             *string                      `json:"shortUUID"`
	State                 *interface{}                 `json:"state"`
	StreamingPlaylists    []VideoStreamingPlaylists    `json:"streamingPlaylists"`
	Support               *string                      `json:"support"`
	Tags                  []string                     `json:"tags"`
	ThumbnailPath         *string                      `json:"thumbnailPath"`
	TrackerUrls           []string                     `json:"trackerUrls"`
	UpdatedAt             *time.Time                   `json:"updatedAt"`
	UserHistory           *VideoDetailsUserHistory     `json:"userHistory"`
	UUID                  *string                      `json:"uuid"`
	Views                 *int64                       `json:"views"`
	WaitTranscoding       *bool                        `json:"waitTranscoding"`
}
