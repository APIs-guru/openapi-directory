package operations

import (
"openapi/pkg/models/shared")


type GetDescribeAlarmsActionEnum string

const (
    GetDescribeAlarmsActionEnumDescribeAlarms GetDescribeAlarmsActionEnum = "DescribeAlarms"
)



type GetDescribeAlarmsStateValueEnum string

const (
    GetDescribeAlarmsStateValueEnumOk GetDescribeAlarmsStateValueEnum = "OK"
GetDescribeAlarmsStateValueEnumAlarm GetDescribeAlarmsStateValueEnum = "ALARM"
GetDescribeAlarmsStateValueEnumInsufficientData GetDescribeAlarmsStateValueEnum = "INSUFFICIENT_DATA"
)



type GetDescribeAlarmsVersionEnum string

const (
    GetDescribeAlarmsVersionEnumTwoThousandAndTen0801 GetDescribeAlarmsVersionEnum = "2010-08-01"
)


type GetDescribeAlarmsQueryParams struct {
    Action GetDescribeAlarmsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ActionPrefix *string `queryParam:"style=form,explode=true,name=ActionPrefix"`
    AlarmNamePrefix *string `queryParam:"style=form,explode=true,name=AlarmNamePrefix"`
    AlarmNames []string `queryParam:"style=form,explode=true,name=AlarmNames"`
    AlarmTypes []shared.AlarmTypeEnum `queryParam:"style=form,explode=true,name=AlarmTypes"`
    ChildrenOfAlarmName *string `queryParam:"style=form,explode=true,name=ChildrenOfAlarmName"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    ParentsOfAlarmName *string `queryParam:"style=form,explode=true,name=ParentsOfAlarmName"`
    StateValue *GetDescribeAlarmsStateValueEnum `queryParam:"style=form,explode=true,name=StateValue"`
    Version GetDescribeAlarmsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeAlarmsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeAlarmsRequest struct {
    QueryParams GetDescribeAlarmsQueryParams 
    Headers GetDescribeAlarmsHeaders 
    
}

type GetDescribeAlarmsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

