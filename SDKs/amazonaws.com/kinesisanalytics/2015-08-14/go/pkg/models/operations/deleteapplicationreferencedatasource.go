package operations

import (
"openapi/pkg/models/shared")


type DeleteApplicationReferenceDataSourceXAmzTargetEnum string

const (
    DeleteApplicationReferenceDataSourceXAmzTargetEnumKinesisAnalytics20150814DeleteApplicationReferenceDataSource DeleteApplicationReferenceDataSourceXAmzTargetEnum = "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource"
)


type DeleteApplicationReferenceDataSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteApplicationReferenceDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteApplicationReferenceDataSourceRequest struct {
    Headers DeleteApplicationReferenceDataSourceHeaders 
    Request shared.DeleteApplicationReferenceDataSourceRequest `request:"mediaType=application/json"`
    
}

type DeleteApplicationReferenceDataSourceResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    DeleteApplicationReferenceDataSourceResponse map[string]interface{} 
    InvalidArgumentException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

