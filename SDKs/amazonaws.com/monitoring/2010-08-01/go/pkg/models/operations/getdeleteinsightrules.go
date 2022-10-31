package operations




type GetDeleteInsightRulesActionEnum string

const (
    GetDeleteInsightRulesActionEnumDeleteInsightRules GetDeleteInsightRulesActionEnum = "DeleteInsightRules"
)



type GetDeleteInsightRulesVersionEnum string

const (
    GetDeleteInsightRulesVersionEnumTwoThousandAndTen0801 GetDeleteInsightRulesVersionEnum = "2010-08-01"
)


type GetDeleteInsightRulesQueryParams struct {
    Action GetDeleteInsightRulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    RuleNames []string `queryParam:"style=form,explode=true,name=RuleNames"`
    Version GetDeleteInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteInsightRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteInsightRulesRequest struct {
    QueryParams GetDeleteInsightRulesQueryParams 
    Headers GetDeleteInsightRulesHeaders 
    
}

type GetDeleteInsightRulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

