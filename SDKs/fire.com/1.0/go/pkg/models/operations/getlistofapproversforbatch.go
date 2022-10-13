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
	EmailAddress *string    `json:"emailAddress"`
	FirstName    *string    `json:"firstName"`
	LastName     *string    `json:"lastName"`
	LastUpdated  *time.Time `json:"lastUpdated"`
	MobileNumber *string    `json:"mobileNumber"`
	Status       *string    `json:"status"`
	UserID       *int64     `json:"userId"`
}

type GetListofApproversForBatch200ApplicationJSONBatchApprovers struct {
	Approvals []GetListofApproversForBatch200ApplicationJSONApprovals `json:"approvals"`
}

type GetListofApproversForBatchResponse struct {
	BatchApprovers *GetListofApproversForBatch200ApplicationJSONBatchApprovers
	ContentType    string
	StatusCode     int64
}
