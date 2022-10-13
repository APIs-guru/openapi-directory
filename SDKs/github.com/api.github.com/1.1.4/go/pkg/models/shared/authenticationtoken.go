package shared

import (
	"time"
)

type AuthenticationTokenRepositorySelectionEnum string

const (
	AuthenticationTokenRepositorySelectionEnumAll      AuthenticationTokenRepositorySelectionEnum = "all"
	AuthenticationTokenRepositorySelectionEnumSelected AuthenticationTokenRepositorySelectionEnum = "selected"
)

type AuthenticationToken struct {
	ExpiresAt           time.Time                                   `json:"expires_at"`
	Permissions         map[string]interface{}                      `json:"permissions"`
	Repositories        []Repository                                `json:"repositories"`
	RepositorySelection *AuthenticationTokenRepositorySelectionEnum `json:"repository_selection"`
	SingleFile          *string                                     `json:"single_file"`
	Token               string                                      `json:"token"`
}
