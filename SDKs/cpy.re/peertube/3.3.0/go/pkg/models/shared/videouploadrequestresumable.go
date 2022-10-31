package shared

import (
"time")

type VideoUploadRequestResumable struct {
    Category *int64 `json:"category,omitempty"`
    ChannelID int64 `json:"channelId"`
    CommentsEnabled *bool `json:"commentsEnabled,omitempty"`
    Description *string `json:"description,omitempty"`
    DownloadEnabled *bool `json:"downloadEnabled,omitempty"`
    Filename string `json:"filename"`
    Language *string `json:"language,omitempty"`
    Licence *int64 `json:"licence,omitempty"`
    Name string `json:"name"`
    Nsfw *bool `json:"nsfw,omitempty"`
    OriginallyPublishedAt *time.Time `json:"originallyPublishedAt,omitempty"`
    Previewfile []byte `json:"previewfile,omitempty"`
    Privacy *int64 `json:"privacy,omitempty"`
    ScheduleUpdate *interface{} `json:"scheduleUpdate,omitempty"`
    Support *string `json:"support,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Thumbnailfile []byte `json:"thumbnailfile,omitempty"`
    WaitTranscoding *bool `json:"waitTranscoding,omitempty"`
    
}

