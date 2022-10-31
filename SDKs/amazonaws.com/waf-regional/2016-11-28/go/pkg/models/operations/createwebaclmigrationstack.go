package operations

import (
"openapi/pkg/models/shared")


type CreateWebACLMigrationStackXAmzTargetEnum string

const (
    CreateWebACLMigrationStackXAmzTargetEnumAwswafRegional20161128CreateWebACLMigrationStack CreateWebACLMigrationStackXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"
)


type CreateWebACLMigrationStackHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateWebACLMigrationStackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateWebACLMigrationStackRequest struct {
    Headers CreateWebACLMigrationStackHeaders 
    Request shared.CreateWebACLMigrationStackRequest `request:"mediaType=application/json"`
    
}

type CreateWebACLMigrationStackResponse struct {
    ContentType string 
    CreateWebACLMigrationStackResponse *shared.CreateWebACLMigrationStackResponse 
    StatusCode int64 
    WafEntityMigrationException *interface{} 
    WafInternalErrorException *interface{} 
    WafInvalidOperationException *interface{} 
    WafInvalidParameterException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

