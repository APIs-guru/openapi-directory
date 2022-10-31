package operations




type GetDeleteAlarmsActionEnum string

const (
    GetDeleteAlarmsActionEnumDeleteAlarms GetDeleteAlarmsActionEnum = "DeleteAlarms"
)



type GetDeleteAlarmsVersionEnum string

const (
    GetDeleteAlarmsVersionEnumTwoThousandAndTen0801 GetDeleteAlarmsVersionEnum = "2010-08-01"
)


type GetDeleteAlarmsQueryParams struct {
    Action GetDeleteAlarmsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AlarmNames []string `queryParam:"style=form,explode=true,name=AlarmNames"`
    Version GetDeleteAlarmsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteAlarmsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteAlarmsRequest struct {
    QueryParams GetDeleteAlarmsQueryParams 
    Headers GetDeleteAlarmsHeaders 
    
}

type GetDeleteAlarmsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

