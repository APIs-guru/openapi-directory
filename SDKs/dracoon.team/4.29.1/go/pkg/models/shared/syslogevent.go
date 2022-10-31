package shared

import (
"time")

type SyslogEvent struct {
    Attribute1 *string `json:"attribute1,omitempty"`
    Attribute2 *string `json:"attribute2,omitempty"`
    Attribute3 *string `json:"attribute3,omitempty"`
    AuthParentSource *string `json:"authParentSource,omitempty"`
    AuthParentTarget *string `json:"authParentTarget,omitempty"`
    CustomerID *int64 `json:"customerId,omitempty"`
    ID int64 `json:"id"`
    Message string `json:"message"`
    ObjectId1 *int64 `json:"objectId1,omitempty"`
    ObjectId2 *int64 `json:"objectId2,omitempty"`
    ObjectName1 *string `json:"objectName1,omitempty"`
    ObjectName2 *string `json:"objectName2,omitempty"`
    ObjectType1 *int32 `json:"objectType1,omitempty"`
    ObjectType2 *int32 `json:"objectType2,omitempty"`
    OperationID *int32 `json:"operationId,omitempty"`
    OperationName *string `json:"operationName,omitempty"`
    Status *int32 `json:"status,omitempty"`
    Time time.Time `json:"time"`
    UserClient *string `json:"userClient,omitempty"`
    UserID int64 `json:"userId"`
    UserIP *string `json:"userIp,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

