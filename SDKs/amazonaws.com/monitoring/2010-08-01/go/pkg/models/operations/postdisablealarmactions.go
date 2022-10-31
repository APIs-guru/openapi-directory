package operations




type PostDisableAlarmActionsActionEnum string

const (
    PostDisableAlarmActionsActionEnumDisableAlarmActions PostDisableAlarmActionsActionEnum = "DisableAlarmActions"
)



type PostDisableAlarmActionsVersionEnum string

const (
    PostDisableAlarmActionsVersionEnumTwoThousandAndTen0801 PostDisableAlarmActionsVersionEnum = "2010-08-01"
)


type PostDisableAlarmActionsQueryParams struct {
    Action PostDisableAlarmActionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisableAlarmActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisableAlarmActionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisableAlarmActionsRequest struct {
    QueryParams PostDisableAlarmActionsQueryParams 
    Headers PostDisableAlarmActionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisableAlarmActionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

