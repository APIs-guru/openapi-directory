package operations




type PostGetClusterCredentialsActionEnum string

const (
    PostGetClusterCredentialsActionEnumGetClusterCredentials PostGetClusterCredentialsActionEnum = "GetClusterCredentials"
)



type PostGetClusterCredentialsVersionEnum string

const (
    PostGetClusterCredentialsVersionEnumTwoThousandAndTwelve1201 PostGetClusterCredentialsVersionEnum = "2012-12-01"
)


type PostGetClusterCredentialsQueryParams struct {
    Action PostGetClusterCredentialsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetClusterCredentialsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetClusterCredentialsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetClusterCredentialsRequest struct {
    QueryParams PostGetClusterCredentialsQueryParams 
    Headers PostGetClusterCredentialsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetClusterCredentialsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

