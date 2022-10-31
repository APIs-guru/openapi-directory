package operations




type PostDownloadDbLogFilePortionActionEnum string

const (
    PostDownloadDbLogFilePortionActionEnumDownloadDbLogFilePortion PostDownloadDbLogFilePortionActionEnum = "DownloadDBLogFilePortion"
)



type PostDownloadDbLogFilePortionVersionEnum string

const (
    PostDownloadDbLogFilePortionVersionEnumTwoThousandAndThirteen0909 PostDownloadDbLogFilePortionVersionEnum = "2013-09-09"
)


type PostDownloadDbLogFilePortionQueryParams struct {
    Action PostDownloadDbLogFilePortionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    NumberOfLines *string `queryParam:"style=form,explode=true,name=NumberOfLines"`
    Version PostDownloadDbLogFilePortionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDownloadDbLogFilePortionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDownloadDbLogFilePortionRequest struct {
    QueryParams PostDownloadDbLogFilePortionQueryParams 
    Headers PostDownloadDbLogFilePortionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDownloadDbLogFilePortionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

