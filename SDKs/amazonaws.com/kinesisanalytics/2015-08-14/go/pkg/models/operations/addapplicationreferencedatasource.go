package operations

import (
"openapi/pkg/models/shared")


type AddApplicationReferenceDataSourceXAmzTargetEnum string

const (
    AddApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20150814AddApplicationReferenceDataSource AddApplicationReferenceDataSourceXAmzTargetEnum = "KinesisAnalytics_20150814.AddApplicationReferenceDataSource"
)


type AddApplicationReferenceDataSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddApplicationReferenceDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddApplicationReferenceDataSourceRequest struct {
    Headers AddApplicationReferenceDataSourceHeaders 
    Request shared.AddApplicationReferenceDataSourceRequest `request:"mediaType=application/json"`
    
}

type AddApplicationReferenceDataSourceResponse struct {
    AddApplicationReferenceDataSourceResponse map[string]interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

