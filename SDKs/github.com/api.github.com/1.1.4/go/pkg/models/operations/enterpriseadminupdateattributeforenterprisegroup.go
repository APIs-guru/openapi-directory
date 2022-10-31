package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimGroupID string `pathParam:"style=simple,explode=false,name=scim_group_id"`
    
}


type EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum string

const (
    EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumAddLower EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "add"
EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumAddMixed EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "Add"
EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumRemoveLower EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "remove"
EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumRemoveMixed EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "Remove"
EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumReplaceLower EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "replace"
EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnumReplaceMixed EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = "Replace"
)


type EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations struct {
    Op EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum `json:"op"`
    Path *string `json:"path,omitempty"`
    Value *interface{} `json:"value,omitempty"`
    
}

type EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody struct {
    Operations []EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations `json:"Operations"`
    Schemas []string `json:"schemas"`
    
}

type EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest struct {
    PathParams EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams 
    Request *EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse struct {
    ContentType string 
    StatusCode int64 
    ScimEnterpriseGroup *shared.ScimEnterpriseGroup 
    
}

