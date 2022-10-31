package operations




type PostDescribeAuthenticationProfilesActionEnum string

const (
    PostDescribeAuthenticationProfilesActionEnumDescribeAuthenticationProfiles PostDescribeAuthenticationProfilesActionEnum = "DescribeAuthenticationProfiles"
)



type PostDescribeAuthenticationProfilesVersionEnum string

const (
    PostDescribeAuthenticationProfilesVersionEnumTwoThousandAndTwelve1201 PostDescribeAuthenticationProfilesVersionEnum = "2012-12-01"
)


type PostDescribeAuthenticationProfilesQueryParams struct {
    Action PostDescribeAuthenticationProfilesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeAuthenticationProfilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeAuthenticationProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeAuthenticationProfilesRequest struct {
    QueryParams PostDescribeAuthenticationProfilesQueryParams 
    Headers PostDescribeAuthenticationProfilesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeAuthenticationProfilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

