package operations

import (
"openapi/pkg/models/shared")

type DescribeSafetyRulePathParams struct {
    SafetyRuleArn string `pathParam:"style=simple,explode=false,name=SafetyRuleArn"`
    
}

type DescribeSafetyRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeSafetyRuleRequest struct {
    PathParams DescribeSafetyRulePathParams 
    Headers DescribeSafetyRuleHeaders 
    
}

type DescribeSafetyRuleResponse struct {
    ContentType string 
    DescribeSafetyRuleResponse *shared.DescribeSafetyRuleResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

