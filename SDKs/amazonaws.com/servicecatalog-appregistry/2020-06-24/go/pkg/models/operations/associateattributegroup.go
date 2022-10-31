package operations

import (
"openapi/pkg/models/shared")

type AssociateAttributeGroupPathParams struct {
    Application string `pathParam:"style=simple,explode=false,name=application"`
    AttributeGroup string `pathParam:"style=simple,explode=false,name=attributeGroup"`
    
}

type AssociateAttributeGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateAttributeGroupRequest struct {
    PathParams AssociateAttributeGroupPathParams 
    Headers AssociateAttributeGroupHeaders 
    
}

type AssociateAttributeGroupResponse struct {
    AssociateAttributeGroupResponse *shared.AssociateAttributeGroupResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

