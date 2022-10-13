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
	ID *int64 `json:"id"`
}

type GetUsersMe200ApplicationJSONContactInfoUserContactV2 struct {
	APIKey      *string                                                                                   `json:"apiKey"`
	ContactInfo *shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee `json:"contactInfo"`
	CreateDate  *time.Time                                                                                `json:"createDate"`
	DeptLeader  *bool                                                                                     `json:"deptLeader"`
	ID          int64                                                                                     `json:"id"`
	Merchant    *GetUsersMe200ApplicationJSONContactInfoMerchant                                          `json:"merchant"`
	Name        *string                                                                                   `json:"name"`
	Status      *bool                                                                                     `json:"status"`
	UpdatedAt   *time.Time                                                                                `json:"updatedAt"`
	UpdatedBy   *time.Time                                                                                `json:"updatedBy"`
	Username    *string                                                                                   `json:"username"`
}

type GetUsersMe200ApplicationJSONMerchant struct {
	ID *int64 `json:"id"`
}

type GetUsersMe200ApplicationJSONUserContactV2 struct {
	APIKey      *string                                               `json:"apiKey"`
	ContactInfo *GetUsersMe200ApplicationJSONContactInfoUserContactV2 `json:"contactInfo"`
	CreateDate  *time.Time                                            `json:"createDate"`
	DeptLeader  *bool                                                 `json:"deptLeader"`
	ID          int64                                                 `json:"id"`
	Merchant    *GetUsersMe200ApplicationJSONMerchant                 `json:"merchant"`
	Name        *string                                               `json:"name"`
	Status      *bool                                                 `json:"status"`
	UpdatedAt   *time.Time                                            `json:"updatedAt"`
	UpdatedBy   *time.Time                                            `json:"updatedBy"`
	Username    *string                                               `json:"username"`
}

type GetUsersMeResponse struct {
	ContentType   string
	StatusCode    int64
	UserContactV2 *GetUsersMe200ApplicationJSONUserContactV2
}
