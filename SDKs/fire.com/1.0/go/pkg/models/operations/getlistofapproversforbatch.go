package operations

import (
	"time"
)

type GetListofApproversForBatchPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type GetListofApproversForBatchRequest struct {
	PathParams GetListofApproversForBatchPathParams
}

type GetListofApproversForBatch200ApplicationJSONApprovals struct {
	EmailAddress *string    `json:"emailAddress,omitempty"`
	FirstName    *string    `json:"firstName,omitempty"`
	LastName     *string    `json:"lastName,omitempty"`
	LastUpdated  *time.Time `json:"lastUpdated,omitempty"`
	MobileNumber *string    `json:"mobileNumber,omitempty"`
	Status       *string    `json:"status,omitempty"`
	UserID       *int64     `json:"userId,omitempty"`
}

type GetListofApproversForBatch200ApplicationJSONBatchApprovers struct {
	Approvals []GetListofApproversForBatch200ApplicationJSONApprovals `json:"approvals,omitempty"`
}

type GetListofApproversForBatchResponse struct {
	BatchApprovers *GetListofApproversForBatch200ApplicationJSONBatchApprovers
	ContentType    string
	StatusCode     int64
}
