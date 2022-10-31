package operations




type PostDescribeClusterParameterGroupsActionEnum string

const (
    PostDescribeClusterParameterGroupsActionEnumDescribeClusterParameterGroups PostDescribeClusterParameterGroupsActionEnum = "DescribeClusterParameterGroups"
)



type PostDescribeClusterParameterGroupsVersionEnum string

const (
    PostDescribeClusterParameterGroupsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterParameterGroupsVersionEnum = "2012-12-01"
)


type PostDescribeClusterParameterGroupsQueryParams struct {
    Action PostDescribeClusterParameterGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeClusterParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClusterParameterGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClusterParameterGroupsRequest struct {
    QueryParams PostDescribeClusterParameterGroupsQueryParams 
    Headers PostDescribeClusterParameterGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClusterParameterGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

