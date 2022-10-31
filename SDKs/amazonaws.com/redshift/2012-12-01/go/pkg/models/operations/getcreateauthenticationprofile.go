package operations




type GetCreateAuthenticationProfileActionEnum string

const (
    GetCreateAuthenticationProfileActionEnumCreateAuthenticationProfile GetCreateAuthenticationProfileActionEnum = "CreateAuthenticationProfile"
)



type GetCreateAuthenticationProfileVersionEnum string

const (
    GetCreateAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 GetCreateAuthenticationProfileVersionEnum = "2012-12-01"
)


type GetCreateAuthenticationProfileQueryParams struct {
    Action GetCreateAuthenticationProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AuthenticationProfileContent string `queryParam:"style=form,explode=true,name=AuthenticationProfileContent"`
    AuthenticationProfileName string `queryParam:"style=form,explode=true,name=AuthenticationProfileName"`
    Version GetCreateAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateAuthenticationProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateAuthenticationProfileRequest struct {
    QueryParams GetCreateAuthenticationProfileQueryParams 
    Headers GetCreateAuthenticationProfileHeaders 
    
}

type GetCreateAuthenticationProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

