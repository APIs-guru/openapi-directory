package operations




type GetDescribeDbSecurityGroupsActionEnum string

const (
    GetDescribeDbSecurityGroupsActionEnumDescribeDbSecurityGroups GetDescribeDbSecurityGroupsActionEnum = "DescribeDBSecurityGroups"
)



type GetDescribeDbSecurityGroupsVersionEnum string

const (
    GetDescribeDbSecurityGroupsVersionEnumTwoThousandAndThirteen0212 GetDescribeDbSecurityGroupsVersionEnum = "2013-02-12"
)


type GetDescribeDbSecurityGroupsQueryParams struct {
    Action GetDescribeDbSecurityGroupsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbSecurityGroupName *string `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version GetDescribeDbSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeDbSecurityGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeDbSecurityGroupsRequest struct {
    QueryParams GetDescribeDbSecurityGroupsQueryParams 
    Headers GetDescribeDbSecurityGroupsHeaders 
    
}

type GetDescribeDbSecurityGroupsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

