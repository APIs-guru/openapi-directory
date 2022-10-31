package operations




type GetSetAlarmStateActionEnum string

const (
    GetSetAlarmStateActionEnumSetAlarmState GetSetAlarmStateActionEnum = "SetAlarmState"
)



type GetSetAlarmStateStateValueEnum string

const (
    GetSetAlarmStateStateValueEnumOk GetSetAlarmStateStateValueEnum = "OK"
GetSetAlarmStateStateValueEnumAlarm GetSetAlarmStateStateValueEnum = "ALARM"
GetSetAlarmStateStateValueEnumInsufficientData GetSetAlarmStateStateValueEnum = "INSUFFICIENT_DATA"
)



type GetSetAlarmStateVersionEnum string

const (
    GetSetAlarmStateVersionEnumTwoThousandAndTen0801 GetSetAlarmStateVersionEnum = "2010-08-01"
)


type GetSetAlarmStateQueryParams struct {
    Action GetSetAlarmStateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AlarmName string `queryParam:"style=form,explode=true,name=AlarmName"`
    StateReason string `queryParam:"style=form,explode=true,name=StateReason"`
    StateReasonData *string `queryParam:"style=form,explode=true,name=StateReasonData"`
    StateValue GetSetAlarmStateStateValueEnum `queryParam:"style=form,explode=true,name=StateValue"`
    Version GetSetAlarmStateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetSetAlarmStateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetSetAlarmStateRequest struct {
    QueryParams GetSetAlarmStateQueryParams 
    Headers GetSetAlarmStateHeaders 
    
}

type GetSetAlarmStateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

