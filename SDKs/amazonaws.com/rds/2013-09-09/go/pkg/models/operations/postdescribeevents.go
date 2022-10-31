package operations




type PostDescribeEventsActionEnum string

const (
    PostDescribeEventsActionEnumDescribeEvents PostDescribeEventsActionEnum = "DescribeEvents"
)



type PostDescribeEventsVersionEnum string

const (
    PostDescribeEventsVersionEnumTwoThousandAndThirteen0909 PostDescribeEventsVersionEnum = "2013-09-09"
)


type PostDescribeEventsQueryParams struct {
    Action PostDescribeEventsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeEventsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeEventsRequest struct {
    QueryParams PostDescribeEventsQueryParams 
    Headers PostDescribeEventsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeEventsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

