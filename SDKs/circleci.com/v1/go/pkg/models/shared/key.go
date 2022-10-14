package shared

import (
	"time"
)

type KeyTypeEnum string

const (
	KeyTypeEnumDeployKey     KeyTypeEnum = "deploy-key"
	KeyTypeEnumGithubUserKey KeyTypeEnum = "github-user-key"
)

type Key struct {
	Fingerprint *string      `json:"fingerprint,omitempty"`
	Preferred   *bool        `json:"preferred,omitempty"`
	PublicKey   *string      `json:"public_key,omitempty"`
	Time        *time.Time   `json:"time,omitempty"`
	Type        *KeyTypeEnum `json:"type,omitempty"`
}
