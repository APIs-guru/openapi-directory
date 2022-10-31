package operations




type PostDeleteAuthenticationProfileActionEnum string

const (
    PostDeleteAuthenticationProfileActionEnumDeleteAuthenticationProfile PostDeleteAuthenticationProfileActionEnum = "DeleteAuthenticationProfile"
)



type PostDeleteAuthenticationProfileVersionEnum string

const (
    PostDeleteAuthenticationProfileVersionEnumTwoThousandAndTwelve1201 PostDeleteAuthenticationProfileVersionEnum = "2012-12-01"
)


type PostDeleteAuthenticationProfileQueryParams struct {
    Action PostDeleteAuthenticationProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteAuthenticationProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteAuthenticationProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteAuthenticationProfileRequest struct {
    QueryParams PostDeleteAuthenticationProfileQueryParams 
    Headers PostDeleteAuthenticationProfileHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteAuthenticationProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

