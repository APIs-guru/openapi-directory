package operations




type PostDescribeClusterTracksActionEnum string

const (
    PostDescribeClusterTracksActionEnumDescribeClusterTracks PostDescribeClusterTracksActionEnum = "DescribeClusterTracks"
)



type PostDescribeClusterTracksVersionEnum string

const (
    PostDescribeClusterTracksVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterTracksVersionEnum = "2012-12-01"
)


type PostDescribeClusterTracksQueryParams struct {
    Action PostDescribeClusterTracksActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeClusterTracksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClusterTracksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClusterTracksRequest struct {
    QueryParams PostDescribeClusterTracksQueryParams 
    Headers PostDescribeClusterTracksHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClusterTracksResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

