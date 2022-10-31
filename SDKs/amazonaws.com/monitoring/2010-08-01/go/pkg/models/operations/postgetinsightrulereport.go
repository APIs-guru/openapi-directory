package operations




type PostGetInsightRuleReportActionEnum string

const (
    PostGetInsightRuleReportActionEnumGetInsightRuleReport PostGetInsightRuleReportActionEnum = "GetInsightRuleReport"
)



type PostGetInsightRuleReportVersionEnum string

const (
    PostGetInsightRuleReportVersionEnumTwoThousandAndTen0801 PostGetInsightRuleReportVersionEnum = "2010-08-01"
)


type PostGetInsightRuleReportQueryParams struct {
    Action PostGetInsightRuleReportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetInsightRuleReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetInsightRuleReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetInsightRuleReportRequest struct {
    QueryParams PostGetInsightRuleReportQueryParams 
    Headers PostGetInsightRuleReportHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetInsightRuleReportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

