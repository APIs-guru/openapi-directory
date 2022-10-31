package operations




type GetDescribeOrderableClusterOptionsActionEnum string

const (
    GetDescribeOrderableClusterOptionsActionEnumDescribeOrderableClusterOptions GetDescribeOrderableClusterOptionsActionEnum = "DescribeOrderableClusterOptions"
)



type GetDescribeOrderableClusterOptionsVersionEnum string

const (
    GetDescribeOrderableClusterOptionsVersionEnumTwoThousandAndTwelve1201 GetDescribeOrderableClusterOptionsVersionEnum = "2012-12-01"
)


type GetDescribeOrderableClusterOptionsQueryParams struct {
    Action GetDescribeOrderableClusterOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ClusterVersion *string `queryParam:"style=form,explode=true,name=ClusterVersion"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    NodeType *string `queryParam:"style=form,explode=true,name=NodeType"`
    Version GetDescribeOrderableClusterOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeOrderableClusterOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeOrderableClusterOptionsRequest struct {
    QueryParams GetDescribeOrderableClusterOptionsQueryParams 
    Headers GetDescribeOrderableClusterOptionsHeaders 
    
}

type GetDescribeOrderableClusterOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

