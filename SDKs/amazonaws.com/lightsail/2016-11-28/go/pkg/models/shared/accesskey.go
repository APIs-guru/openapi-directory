package shared

import (
	"time"
)

type AccessKey struct {
	AccessKeyID     *string            `json:"accessKeyId"`
	CreatedAt       *time.Time         `json:"createdAt"`
	LastUsed        *AccessKeyLastUsed `json:"lastUsed"`
	SecretAccessKey *string            `json:"secretAccessKey"`
	Status          *StatusTypeEnum    `json:"status"`
}
