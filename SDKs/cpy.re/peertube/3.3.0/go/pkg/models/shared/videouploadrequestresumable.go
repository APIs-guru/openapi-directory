package shared

import (
	"time"
)

type VideoUploadRequestResumable struct {
	Category              *int64       `json:"category"`
	ChannelID             int64        `json:"channelId"`
	CommentsEnabled       *bool        `json:"commentsEnabled"`
	Description           *string      `json:"description"`
	DownloadEnabled       *bool        `json:"downloadEnabled"`
	Filename              string       `json:"filename"`
	Language              *string      `json:"language"`
	Licence               *int64       `json:"licence"`
	Name                  string       `json:"name"`
	Nsfw                  *bool        `json:"nsfw"`
	OriginallyPublishedAt *time.Time   `json:"originallyPublishedAt"`
	Previewfile           []byte       `json:"previewfile"`
	Privacy               *int64       `json:"privacy"`
	ScheduleUpdate        *interface{} `json:"scheduleUpdate"`
	Support               *string      `json:"support"`
	Tags                  []string     `json:"tags"`
	Thumbnailfile         []byte       `json:"thumbnailfile"`
	WaitTranscoding       *bool        `json:"waitTranscoding"`
}
