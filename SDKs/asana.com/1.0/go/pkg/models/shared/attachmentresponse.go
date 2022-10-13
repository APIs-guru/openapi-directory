package shared

import (
	"time"
)

type AttachmentResponseParent struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type AttachmentResponse struct {
	CreatedAt       *time.Time                `json:"created_at"`
	DownloadURL     *string                   `json:"download_url"`
	Gid             *string                   `json:"gid"`
	Host            *string                   `json:"host"`
	Name            *string                   `json:"name"`
	Parent          *AttachmentResponseParent `json:"parent"`
	ResourceSubtype *interface{}              `json:"resource_subtype"`
	ResourceType    *string                   `json:"resource_type"`
	ViewURL         *string                   `json:"view_url"`
}
