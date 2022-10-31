package operations




type PostDescribeClusterDbRevisionsActionEnum string

const (
    PostDescribeClusterDbRevisionsActionEnumDescribeClusterDbRevisions PostDescribeClusterDbRevisionsActionEnum = "DescribeClusterDbRevisions"
)



type PostDescribeClusterDbRevisionsVersionEnum string

const (
    PostDescribeClusterDbRevisionsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterDbRevisionsVersionEnum = "2012-12-01"
)


type PostDescribeClusterDbRevisionsQueryParams struct {
    Action PostDescribeClusterDbRevisionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeClusterDbRevisionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeClusterDbRevisionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeClusterDbRevisionsRequest struct {
    QueryParams PostDescribeClusterDbRevisionsQueryParams 
    Headers PostDescribeClusterDbRevisionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeClusterDbRevisionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

