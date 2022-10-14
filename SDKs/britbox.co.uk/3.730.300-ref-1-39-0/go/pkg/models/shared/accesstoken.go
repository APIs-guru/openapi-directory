package shared

import (
	"time"
)

type AccessTokenTypeEnum string

const (
	AccessTokenTypeEnumUserAccount AccessTokenTypeEnum = "UserAccount"
	AccessTokenTypeEnumUserProfile AccessTokenTypeEnum = "UserProfile"
)

type AccessToken struct {
	AccountCreated *bool               `json:"accountCreated,omitempty"`
	ExpirationDate time.Time           `json:"expirationDate"`
	Refreshable    bool                `json:"refreshable"`
	Type           AccessTokenTypeEnum `json:"type"`
	Value          string              `json:"value"`
}
