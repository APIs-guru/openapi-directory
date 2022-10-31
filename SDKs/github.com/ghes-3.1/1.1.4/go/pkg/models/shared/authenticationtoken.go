package shared

import (
"time")


type AuthenticationTokenRepositorySelectionEnum string

const (
    AuthenticationTokenRepositorySelectionEnumAll AuthenticationTokenRepositorySelectionEnum = "all"
AuthenticationTokenRepositorySelectionEnumSelected AuthenticationTokenRepositorySelectionEnum = "selected"
)


type AuthenticationToken struct {
    ExpiresAt time.Time `json:"expires_at"`
    Permissions map[string]interface{} `json:"permissions,omitempty"`
    Repositories []Repository `json:"repositories,omitempty"`
    RepositorySelection *AuthenticationTokenRepositorySelectionEnum `json:"repository_selection,omitempty"`
    SingleFile *string `json:"single_file,omitempty"`
    Token string `json:"token"`
    
}

