package operations

import (
	"time"
)

type GetListofApproversForBatchPathParams struct {
	BatchUUID string `pathParam:"style=simple,explode=false,name=batchUuid"`
}

type GetListofApproversForBatchBatchApproversApprovals struct {
	EmailAddress *string    `json:"emailAddress,omitempty"`
	FirstName    *string    `json:"firstName,omitempty"`
	LastName     *string    `json:"lastName,omitempty"`
	LastUpdated  *time.Time `json:"lastUpdated,omitempty"`
	MobileNumber *string    `json:"mobileNumber,omitempty"`
	Status       *string    `json:"status,omitempty"`
	UserID       *int64     `json:"userId,omitempty"`
}

type GetListofApproversForBatchBatchApprovers struct {
	Approvals []GetListofApproversForBatchBatchApproversApprovals `json:"approvals,omitempty"`
}

type GetListofApproversForBatchRequest struct {
	PathParams GetListofApproversForBatchPathParams
}

type GetListofApproversForBatchResponse struct {
	BatchApprovers *GetListofApproversForBatchBatchApprovers
	ContentType    string
	StatusCode     int64
}
