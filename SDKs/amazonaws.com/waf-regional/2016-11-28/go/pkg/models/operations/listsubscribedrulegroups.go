package operations

import (
"openapi/pkg/models/shared")


type ListSubscribedRuleGroupsXAmzTargetEnum string

const (
    ListSubscribedRuleGroupsXAmzTargetEnumAwswafRegional20161128ListSubscribedRuleGroups ListSubscribedRuleGroupsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListSubscribedRuleGroups"
)


type ListSubscribedRuleGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListSubscribedRuleGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListSubscribedRuleGroupsRequest struct {
    Headers ListSubscribedRuleGroupsHeaders 
    Request shared.ListSubscribedRuleGroupsRequest `request:"mediaType=application/json"`
    
}

type ListSubscribedRuleGroupsResponse struct {
    ContentType string 
    ListSubscribedRuleGroupsResponse *shared.ListSubscribedRuleGroupsResponse 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

