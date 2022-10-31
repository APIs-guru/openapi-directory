package operations




type PostDescribeDbClustersActionEnum string

const (
    PostDescribeDbClustersActionEnumDescribeDbClusters PostDescribeDbClustersActionEnum = "DescribeDBClusters"
)



type PostDescribeDbClustersVersionEnum string

const (
    PostDescribeDbClustersVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClustersVersionEnum = "2014-10-31"
)


type PostDescribeDbClustersQueryParams struct {
    Action PostDescribeDbClustersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeDbClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbClustersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbClustersRequest struct {
    QueryParams PostDescribeDbClustersQueryParams 
    Headers PostDescribeDbClustersHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbClustersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

