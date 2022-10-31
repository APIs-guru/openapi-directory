package operations




type PostDescribeAlarmHistoryActionEnum string

const (
    PostDescribeAlarmHistoryActionEnumDescribeAlarmHistory PostDescribeAlarmHistoryActionEnum = "DescribeAlarmHistory"
)



type PostDescribeAlarmHistoryVersionEnum string

const (
    PostDescribeAlarmHistoryVersionEnumTwoThousandAndTen0801 PostDescribeAlarmHistoryVersionEnum = "2010-08-01"
)


type PostDescribeAlarmHistoryQueryParams struct {
    Action PostDescribeAlarmHistoryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostDescribeAlarmHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeAlarmHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeAlarmHistoryRequest struct {
    QueryParams PostDescribeAlarmHistoryQueryParams 
    Headers PostDescribeAlarmHistoryHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeAlarmHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

