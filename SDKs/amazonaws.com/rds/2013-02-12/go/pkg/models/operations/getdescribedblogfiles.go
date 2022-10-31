package operations




type GetDescribeDbLogFilesActionEnum string

const (
    GetDescribeDbLogFilesActionEnumDescribeDbLogFiles GetDescribeDbLogFilesActionEnum = "DescribeDBLogFiles"
)



type GetDescribeDbLogFilesVersionEnum string

const (
    GetDescribeDbLogFilesVersionEnumTwoThousandAndThirteen0212 GetDescribeDbLogFilesVersionEnum = "2013-02-12"
)


type GetDescribeDbLogFilesQueryParams struct {
    Action GetDescribeDbLogFilesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    FileLastWritten *int64 `queryParam:"style=form,explode=true,name=FileLastWritten"`
    FileSize *int64 `queryParam:"style=form,explode=true,name=FileSize"`
    FilenameContains *string `queryParam:"style=form,explode=true,name=FilenameContains"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version GetDescribeDbLogFilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeDbLogFilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeDbLogFilesRequest struct {
    QueryParams GetDescribeDbLogFilesQueryParams 
    Headers GetDescribeDbLogFilesHeaders 
    
}

type GetDescribeDbLogFilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

