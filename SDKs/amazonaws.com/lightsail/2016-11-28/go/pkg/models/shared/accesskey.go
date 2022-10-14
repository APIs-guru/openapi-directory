package shared

import (
	"time"
)

type AccessKey struct {
	AccessKeyID     *string            `json:"accessKeyId,omitempty"`
	CreatedAt       *time.Time         `json:"createdAt,omitempty"`
	LastUsed        *AccessKeyLastUsed `json:"lastUsed,omitempty"`
	SecretAccessKey *string            `json:"secretAccessKey,omitempty"`
	Status          *StatusTypeEnum    `json:"status,omitempty"`
}
