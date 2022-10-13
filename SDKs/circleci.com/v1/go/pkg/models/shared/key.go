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
	Fingerprint *string      `json:"fingerprint"`
	Preferred   *bool        `json:"preferred"`
	PublicKey   *string      `json:"public_key"`
	Time        *time.Time   `json:"time"`
	Type        *KeyTypeEnum `json:"type"`
}
