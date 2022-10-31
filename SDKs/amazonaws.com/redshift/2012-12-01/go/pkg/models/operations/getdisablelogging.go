package operations




type GetDisableLoggingActionEnum string

const (
    GetDisableLoggingActionEnumDisableLogging GetDisableLoggingActionEnum = "DisableLogging"
)



type GetDisableLoggingVersionEnum string

const (
    GetDisableLoggingVersionEnumTwoThousandAndTwelve1201 GetDisableLoggingVersionEnum = "2012-12-01"
)


type GetDisableLoggingQueryParams struct {
    Action GetDisableLoggingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterIdentifier string `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
    Version GetDisableLoggingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDisableLoggingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDisableLoggingRequest struct {
    QueryParams GetDisableLoggingQueryParams 
    Headers GetDisableLoggingHeaders 
    
}

type GetDisableLoggingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

