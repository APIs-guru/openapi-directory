package shared

import (
	"time"
)

type SyslogEvent struct {
	Attribute1       *string   `json:"attribute1"`
	Attribute2       *string   `json:"attribute2"`
	Attribute3       *string   `json:"attribute3"`
	AuthParentSource *string   `json:"authParentSource"`
	AuthParentTarget *string   `json:"authParentTarget"`
	CustomerID       *int64    `json:"customerId"`
	ID               int64     `json:"id"`
	Message          string    `json:"message"`
	ObjectId1        *int64    `json:"objectId1"`
	ObjectId2        *int64    `json:"objectId2"`
	ObjectName1      *string   `json:"objectName1"`
	ObjectName2      *string   `json:"objectName2"`
	ObjectType1      *int32    `json:"objectType1"`
	ObjectType2      *int32    `json:"objectType2"`
	OperationID      *int32    `json:"operationId"`
	OperationName    *string   `json:"operationName"`
	Status           *int32    `json:"status"`
	Time             time.Time `json:"time"`
	UserClient       *string   `json:"userClient"`
	UserID           int64     `json:"userId"`
	UserIP           *string   `json:"userIp"`
	UserName         *string   `json:"userName"`
}
