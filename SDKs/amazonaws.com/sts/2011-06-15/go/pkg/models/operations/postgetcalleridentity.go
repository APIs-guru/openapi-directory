package operations




type PostGetCallerIdentityActionEnum string

const (
    PostGetCallerIdentityActionEnumGetCallerIdentity PostGetCallerIdentityActionEnum = "GetCallerIdentity"
)



type PostGetCallerIdentityVersionEnum string

const (
    PostGetCallerIdentityVersionEnumTwoThousandAndEleven0615 PostGetCallerIdentityVersionEnum = "2011-06-15"
)


type PostGetCallerIdentityQueryParams struct {
    Action PostGetCallerIdentityActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetCallerIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetCallerIdentityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetCallerIdentityRequest struct {
    QueryParams PostGetCallerIdentityQueryParams 
    Headers PostGetCallerIdentityHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetCallerIdentityResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

