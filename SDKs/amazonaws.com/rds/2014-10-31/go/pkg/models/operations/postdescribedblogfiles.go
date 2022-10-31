package operations




type PostDescribeDbLogFilesActionEnum string

const (
    PostDescribeDbLogFilesActionEnumDescribeDbLogFiles PostDescribeDbLogFilesActionEnum = "DescribeDBLogFiles"
)



type PostDescribeDbLogFilesVersionEnum string

const (
    PostDescribeDbLogFilesVersionEnumTwoThousandAndFourteen1031 PostDescribeDbLogFilesVersionEnum = "2014-10-31"
)


type PostDescribeDbLogFilesQueryParams struct {
    Action PostDescribeDbLogFilesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeDbLogFilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDbLogFilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDbLogFilesRequest struct {
    QueryParams PostDescribeDbLogFilesQueryParams 
    Headers PostDescribeDbLogFilesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDbLogFilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

