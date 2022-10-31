package shared

import (
"time")

type Studio struct {
    AdminRoleArn *string `json:"adminRoleArn,omitempty"`
    Arn *string `json:"arn,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    HomeRegion *string `json:"homeRegion,omitempty"`
    SsoClientID *string `json:"ssoClientId,omitempty"`
    State *StudioStateEnum `json:"state,omitempty"`
    StatusCode *StudioStatusCodeEnum `json:"statusCode,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    StudioEncryptionConfiguration *StudioEncryptionConfiguration `json:"studioEncryptionConfiguration,omitempty"`
    StudioID *string `json:"studioId,omitempty"`
    StudioName *string `json:"studioName,omitempty"`
    StudioURL *string `json:"studioUrl,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    UserRoleArn *string `json:"userRoleArn,omitempty"`
    
}

