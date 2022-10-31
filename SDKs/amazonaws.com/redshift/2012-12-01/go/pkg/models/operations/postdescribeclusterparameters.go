package operations




type PostDescribeClusterParametersActionEnum string

const (
    PostDescribeClusterParametersActionEnumDescribeClusterParameters PostDescribeClusterParametersActionEnum = "DescribeClusterParameters"
)



type PostDescribeClusterParametersVersionEnum string

const (
    PostDescribeClusterParametersVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterParametersVersionEnum = "2012-12-01"
)


type PostDescribeClusterParametersQueryParams struct {
    Action PostDescribeClusterParametersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClusterParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClusterParametersRequest struct {
    QueryParams PostDescribeClusterParametersQueryParams 
    Headers PostDescribeClusterParametersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClusterParametersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

