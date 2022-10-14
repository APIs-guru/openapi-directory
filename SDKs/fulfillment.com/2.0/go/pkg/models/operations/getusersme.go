package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUsersMeSecurity struct {
	FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
}

type GetUsersMeRequest struct {
	Security GetUsersMeSecurity
}

type GetUsersMe200ApplicationJSONContactInfoMerchant struct {
	ID *int64 `json:"id,omitempty"`
}

type GetUsersMe200ApplicationJSONContactInfoUserContactV2 struct {
	APIKey      *string                                                                                   `json:"apiKey,omitempty"`
	ContactInfo *shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"contactInfo,omitempty"`
	CreateDate  *time.Time                                                                                `json:"createDate,omitempty"`
	DeptLeader  *bool                                                                                     `json:"deptLeader,omitempty"`
	ID          int64                                                                                     `json:"id"`
	Merchant    *GetUsersMe200ApplicationJSONContactInfoMerchant                                          `json:"merchant,omitempty"`
	Name        *string                                                                                   `json:"name,omitempty"`
	Status      *bool                                                                                     `json:"status,omitempty"`
	UpdatedAt   *time.Time                                                                                `json:"updatedAt,omitempty"`
	UpdatedBy   *time.Time                                                                                `json:"updatedBy,omitempty"`
	Username    *string                                                                                   `json:"username,omitempty"`
}

type GetUsersMe200ApplicationJSONMerchant struct {
	ID *int64 `json:"id,omitempty"`
}

type GetUsersMe200ApplicationJSONUserContactV2 struct {
	APIKey      *string                                               `json:"apiKey,omitempty"`
	ContactInfo *GetUsersMe200ApplicationJSONContactInfoUserContactV2 `json:"contactInfo,omitempty"`
	CreateDate  *time.Time                                            `json:"createDate,omitempty"`
	DeptLeader  *bool                                                 `json:"deptLeader,omitempty"`
	ID          int64                                                 `json:"id"`
	Merchant    *GetUsersMe200ApplicationJSONMerchant                 `json:"merchant,omitempty"`
	Name        *string                                               `json:"name,omitempty"`
	Status      *bool                                                 `json:"status,omitempty"`
	UpdatedAt   *time.Time                                            `json:"updatedAt,omitempty"`
	UpdatedBy   *time.Time                                            `json:"updatedBy,omitempty"`
	Username    *string                                               `json:"username,omitempty"`
}

type GetUsersMeResponse struct {
	ContentType   string
	StatusCode    int64
	UserContactV2 *GetUsersMe200ApplicationJSONUserContactV2
}
