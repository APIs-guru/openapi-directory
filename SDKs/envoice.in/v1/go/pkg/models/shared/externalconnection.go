package shared

import (
"time")

type ExternalConnection struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    AccessTokenSecret *string `json:"AccessTokenSecret,omitempty"`
    Data *string `json:"Data,omitempty"`
    ExpiresOn *time.Time `json:"ExpiresOn,omitempty"`
    ExternalUserID *string `json:"ExternalUserId,omitempty"`
    ExternalUsername *string `json:"ExternalUsername,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    Provider *string `json:"Provider,omitempty"`
    UserID *int32 `json:"UserId,omitempty"`
    
}

