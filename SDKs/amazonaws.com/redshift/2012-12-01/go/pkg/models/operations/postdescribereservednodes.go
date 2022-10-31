package operations




type PostDescribeReservedNodesActionEnum string

const (
    PostDescribeReservedNodesActionEnumDescribeReservedNodes PostDescribeReservedNodesActionEnum = "DescribeReservedNodes"
)



type PostDescribeReservedNodesVersionEnum string

const (
    PostDescribeReservedNodesVersionEnumTwoThousandAndTwelve1201 PostDescribeReservedNodesVersionEnum = "2012-12-01"
)


type PostDescribeReservedNodesQueryParams struct {
    Action PostDescribeReservedNodesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeReservedNodesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReservedNodesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReservedNodesRequest struct {
    QueryParams PostDescribeReservedNodesQueryParams 
    Headers PostDescribeReservedNodesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReservedNodesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

