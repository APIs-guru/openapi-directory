package operations

import (
"time"
"openapi/pkg/models/shared")


type GetDescribeAlarmHistoryActionEnum string

const (
    GetDescribeAlarmHistoryActionEnumDescribeAlarmHistory GetDescribeAlarmHistoryActionEnum = "DescribeAlarmHistory"
)



type GetDescribeAlarmHistoryHistoryItemTypeEnum string

const (
    GetDescribeAlarmHistoryHistoryItemTypeEnumConfigurationUpdate GetDescribeAlarmHistoryHistoryItemTypeEnum = "ConfigurationUpdate"
GetDescribeAlarmHistoryHistoryItemTypeEnumStateUpdate GetDescribeAlarmHistoryHistoryItemTypeEnum = "StateUpdate"
GetDescribeAlarmHistoryHistoryItemTypeEnumAction GetDescribeAlarmHistoryHistoryItemTypeEnum = "Action"
)



type GetDescribeAlarmHistoryScanByEnum string

const (
    GetDescribeAlarmHistoryScanByEnumTimestampDescending GetDescribeAlarmHistoryScanByEnum = "TimestampDescending"
GetDescribeAlarmHistoryScanByEnumTimestampAscending GetDescribeAlarmHistoryScanByEnum = "TimestampAscending"
)



type GetDescribeAlarmHistoryVersionEnum string

const (
    GetDescribeAlarmHistoryVersionEnumTwoThousandAndTen0801 GetDescribeAlarmHistoryVersionEnum = "2010-08-01"
)


type GetDescribeAlarmHistoryQueryParams struct {
    Action GetDescribeAlarmHistoryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AlarmName *string `queryParam:"style=form,explode=true,name=AlarmName"`
    AlarmTypes []shared.AlarmTypeEnum `queryParam:"style=form,explode=true,name=AlarmTypes"`
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    HistoryItemType *GetDescribeAlarmHistoryHistoryItemTypeEnum `queryParam:"style=form,explode=true,name=HistoryItemType"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    ScanBy *GetDescribeAlarmHistoryScanByEnum `queryParam:"style=form,explode=true,name=ScanBy"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    Version GetDescribeAlarmHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeAlarmHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeAlarmHistoryRequest struct {
    QueryParams GetDescribeAlarmHistoryQueryParams 
    Headers GetDescribeAlarmHistoryHeaders 
    
}

type GetDescribeAlarmHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

