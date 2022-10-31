package operations




type PostDescribeEndpointAuthorizationActionEnum string

const (
    PostDescribeEndpointAuthorizationActionEnumDescribeEndpointAuthorization PostDescribeEndpointAuthorizationActionEnum = "DescribeEndpointAuthorization"
)



type PostDescribeEndpointAuthorizationVersionEnum string

const (
    PostDescribeEndpointAuthorizationVersionEnumTwoThousandAndTwelve1201 PostDescribeEndpointAuthorizationVersionEnum = "2012-12-01"
)


type PostDescribeEndpointAuthorizationQueryParams struct {
    Action PostDescribeEndpointAuthorizationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeEndpointAuthorizationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEndpointAuthorizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEndpointAuthorizationRequest struct {
    QueryParams PostDescribeEndpointAuthorizationQueryParams 
    Headers PostDescribeEndpointAuthorizationHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEndpointAuthorizationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

