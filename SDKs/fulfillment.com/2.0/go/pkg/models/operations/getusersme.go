package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUsersMeSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetUsersMeUserContactV2UserContactV2Merchant struct {
	ID *int64 `json:"id,omitempty"`
}

type GetUsersMeUserContactV2UserContactV2 struct {
	APIKey      *string                                                                                   `json:"apiKey,omitempty"`
	ContactInfo *shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"contactInfo,omitempty"`
	CreateDate  *time.Time                                                                                `json:"createDate,omitempty"`
	DeptLeader  *bool                                                                                     `json:"deptLeader,omitempty"`
	ID          int64                                                                                     `json:"id"`
	Merchant    *GetUsersMeUserContactV2UserContactV2Merchant                                             `json:"merchant,omitempty"`
	Name        *string                                                                                   `json:"name,omitempty"`
	Status      *bool                                                                                     `json:"status,omitempty"`
	UpdatedAt   *time.Time                                                                                `json:"updatedAt,omitempty"`
	UpdatedBy   *time.Time                                                                                `json:"updatedBy,omitempty"`
	Username    *string                                                                                   `json:"username,omitempty"`
}

type GetUsersMeUserContactV2Merchant struct {
	ID *int64 `json:"id,omitempty"`
}

type GetUsersMeUserContactV2 struct {
	APIKey      *string                               `json:"apiKey,omitempty"`
	ContactInfo *GetUsersMeUserContactV2UserContactV2 `json:"contactInfo,omitempty"`
	CreateDate  *time.Time                            `json:"createDate,omitempty"`
	DeptLeader  *bool                                 `json:"deptLeader,omitempty"`
	ID          int64                                 `json:"id"`
	Merchant    *GetUsersMeUserContactV2Merchant      `json:"merchant,omitempty"`
	Name        *string                               `json:"name,omitempty"`
	Status      *bool                                 `json:"status,omitempty"`
	UpdatedAt   *time.Time                            `json:"updatedAt,omitempty"`
	UpdatedBy   *time.Time                            `json:"updatedBy,omitempty"`
	Username    *string                               `json:"username,omitempty"`
}

type GetUsersMeRequest struct {
	Security GetUsersMeSecurity
}

type GetUsersMeResponse struct {
	ContentType   string
	StatusCode    int64
	UserContactV2 *GetUsersMeUserContactV2
}
