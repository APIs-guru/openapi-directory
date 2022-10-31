package operations




type PostDescribeDbParameterGroupsActionEnum string

const (
    PostDescribeDbParameterGroupsActionEnumDescribeDbParameterGroups PostDescribeDbParameterGroupsActionEnum = "DescribeDBParameterGroups"
)



type PostDescribeDbParameterGroupsVersionEnum string

const (
    PostDescribeDbParameterGroupsVersionEnumTwoThousandAndThirteen0212 PostDescribeDbParameterGroupsVersionEnum = "2013-02-12"
)


type PostDescribeDbParameterGroupsQueryParams struct {
    Action PostDescribeDbParameterGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeDbParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbParameterGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbParameterGroupsRequest struct {
    QueryParams PostDescribeDbParameterGroupsQueryParams 
    Headers PostDescribeDbParameterGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbParameterGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

