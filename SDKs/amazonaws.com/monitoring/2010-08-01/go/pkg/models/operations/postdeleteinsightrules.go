package operations




type PostDeleteInsightRulesActionEnum string

const (
    PostDeleteInsightRulesActionEnumDeleteInsightRules PostDeleteInsightRulesActionEnum = "DeleteInsightRules"
)



type PostDeleteInsightRulesVersionEnum string

const (
    PostDeleteInsightRulesVersionEnumTwoThousandAndTen0801 PostDeleteInsightRulesVersionEnum = "2010-08-01"
)


type PostDeleteInsightRulesQueryParams struct {
    Action PostDeleteInsightRulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteInsightRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteInsightRulesRequest struct {
    QueryParams PostDeleteInsightRulesQueryParams 
    Headers PostDeleteInsightRulesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteInsightRulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

