package operations




type PostDescribeDbSecurityGroupsActionEnum string

const (
    PostDescribeDbSecurityGroupsActionEnumDescribeDbSecurityGroups PostDescribeDbSecurityGroupsActionEnum = "DescribeDBSecurityGroups"
)



type PostDescribeDbSecurityGroupsVersionEnum string

const (
    PostDescribeDbSecurityGroupsVersionEnumTwoThousandAndThirteen0212 PostDescribeDbSecurityGroupsVersionEnum = "2013-02-12"
)


type PostDescribeDbSecurityGroupsQueryParams struct {
    Action PostDescribeDbSecurityGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeDbSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbSecurityGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbSecurityGroupsRequest struct {
    QueryParams PostDescribeDbSecurityGroupsQueryParams 
    Headers PostDescribeDbSecurityGroupsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbSecurityGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

