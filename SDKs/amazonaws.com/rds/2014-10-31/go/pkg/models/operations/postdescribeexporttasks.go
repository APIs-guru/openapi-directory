package operations




type PostDescribeExportTasksActionEnum string

const (
    PostDescribeExportTasksActionEnumDescribeExportTasks PostDescribeExportTasksActionEnum = "DescribeExportTasks"
)



type PostDescribeExportTasksVersionEnum string

const (
    PostDescribeExportTasksVersionEnumTwoThousandAndFourteen1031 PostDescribeExportTasksVersionEnum = "2014-10-31"
)


type PostDescribeExportTasksQueryParams struct {
    Action PostDescribeExportTasksActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeExportTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeExportTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeExportTasksRequest struct {
    QueryParams PostDescribeExportTasksQueryParams 
    Headers PostDescribeExportTasksHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeExportTasksResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

